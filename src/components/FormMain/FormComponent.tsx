"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

export const FormComponent: React.FC = (): JSX.Element => {
	const [fileNames, setFileNames] = useState<string[]>([]);
	const { register, handleSubmit, control, setValue } = useForm();
	const [isPopup, setIsPopup] = useState(false);

	const onSubmit = async (data: any): Promise<void> => {
		// URL вашего API
		const apiUrl = "http://localhost:4100/form";
		//setIsFormOpen(false)

		try {
			const response = await fetch(apiUrl, {
				method: "POST", // Метод HTTP запроса
				headers: {
					"Content-Type": "application/json", // Указываем, что тело запроса содержит JSON
				},
				body: JSON.stringify(data), // Преобразуем данные формы в строку JSON
			});

			if (response.ok) {
				// Успешная отправка данных
				const responseData = await response.json(); // Преобразовываем ответ от сервера в JSON
				// Здесь можете реализовать дальнейшую логику (например, показать сообщение об успехе)
			} else {
				// Сервер вернул ошибку
				console.error("Failed to submit form:", response.statusText);
				// Обработка ошибки, например, показать сообщение об ошибке
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			// Обработка ошибки сети или другой ошибки запроса
		}
	};

	const [isFormMobile, setIsFormMobile] = useState(false);

	useEffect(() => {
		// Define the breakpoint
		const largeScreenMediaQuery = window.matchMedia("(max-width: 992px)"); // Example for large screens up to 992px

		const handleScreenResize = (ele: any): void => {
			// Set state based on the media query's matches property
			setIsFormMobile(ele.matches);
		};

		largeScreenMediaQuery.addEventListener("change", handleScreenResize);

		handleScreenResize(largeScreenMediaQuery);

		// Clean up event listener on unmount
		return () =>
			largeScreenMediaQuery.removeEventListener(
				"change",
				handleScreenResize,
			);
	}, []);

	return (
		<section className="container component-mb">
			{isPopup && (
				<div className="fixed z-50 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col h-[290px] w-full lgw-[622px] bg-black m-auto items-center justify-around  ">
					<p className="title-white ">YOUR MESSAGE WAS SENT</p>
					<p className="text-white">
						We will contact you within 24 hours
					</p>
					<Button onClick={() => setIsPopup(false)} variant="primary">
						Thanks!
					</Button>
				</div>
			)}
			<p className="custom-heading xl:text-center">
				Fill the form and <br></br>
				<span className="text-main-yellow">
					we will contact you
				</span>{" "}
			</p>
			{!isFormMobile && (
				<form
					className={` mx-auto w-max rounded-3xl`}
					onSubmit={handleSubmit(onSubmit)}
					method="post"
					encType="multipart/form-data"
				>
					<div className="flex gap-14 justify-between mt-10 mb-20 max-md:flex-wrap">
						<div className="max-w-[273px] flex flex-col ">
							<label className="text-white mb-5">
								Your Name*
							</label>
							<input
								placeholder="Enter Your name"
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
								{...register("name")}
							/>
						</div>
						<div className="max-w-[273px] flex flex-col ">
							<label className="text-white mb-5">
								Your Email*
							</label>
							<input
								placeholder="email@example.com"
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
								{...register("email")}
							/>
						</div>
						<div className="max-w-[273px] flex flex-col ">
							<label className="text-white mb-5">
								Phone Number*
							</label>
							<input
								placeholder="+1(234) 567-890"
								className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
								{...register("number")}
							/>
						</div>
					</div>

					<div className="flex gap-14 justify-start mb-20">
						<div className="max-w-[273px] flex flex-col ">
							<label className="text-white mb-5">City</label>
							<input
								placeholder="Enter Your name"
								className="w-[273px] h-[42px] px-[15px]  border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
								{...register("city")}
							/>
						</div>
						<div className="max-w-[273px] flex flex-col ">
							<label className="text-white mb-5">Zip code</label>
							<input
								placeholder="email@example.come"
								className="w-[273px] h-[42px] px-[15px]  border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
								required
								type="text"
								{...register("zip")}
							/>
						</div>
					</div>
					<div className="w-[605px] flex flex-col mb-20">
						<label className="text-white mb-5">Your Message</label>
						<textarea
							{...register("comments", { required: true })}
							className=" h-[40px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							placeholder="Enter your comments..."
						/>
					</div>

					<div className="flex mt-20 justify-between">
						<div className="flex items-center gap-4 white-paragraph">
							<p>
								By clicking Submit button I agree to the{" "}
								<span className="text-white underline">
									<Link href="/">Terms and Conditions</Link>
								</span>
							</p>
						</div>
						<Button
							onClick={() => setIsPopup(true)}
							variant="secondary"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</form>
			)}

			{/* mobile form */}

			{isFormMobile && (
				<form
					className={` flex flex-col items-center justify-center`}
					onSubmit={handleSubmit(onSubmit)}
					method="post"
					encType="multipart/form-data"
				>
					<div className="max-w-[273px] flex flex-col inside-mb">
						<label className="text-white my-5">Your Name*</label>
						<input
							placeholder="Enter Your name"
							className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("name")}
						/>
					</div>
					<div className="max-w-[273px] flex flex-col ">
						<label className="text-white my-5">Your Email*</label>
						<input
							placeholder="email@example.com"
							className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("email")}
						/>
					</div>
					<div className=" flex flex-col ">
						<label className="text-white my-5">Phone Number*</label>
						<input
							placeholder="+1(234) 567-890"
							className="w-[273px] h-[42px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("number")}
						/>
					</div>

					<div className="max-w-[273px] flex flex-col ">
						<label className="text-white my-5">City</label>
						<input
							placeholder="Enter Your name"
							className="w-[273px] h-[42px] px-[15px]  border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("city")}
						/>
					</div>
					<div className=" flex flex-col ">
						<label className="text-white my-5">Zip code</label>
						<input
							placeholder="email@example.come"
							className="w-[273px] h-[42px] px-[15px]  border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							required
							type="text"
							{...register("zip")}
						/>
					</div>
					<div className="w-[273px] flex flex-col ">
						<label className="text-white my-5">Your Message</label>
						<textarea
							{...register("comments", { required: true })}
							className=" h-[40px] px-[15px] border-b border-zinc-600 justify-between items-center inline-flex bg-transparent placeholder:gray-paragraph text-white"
							placeholder="Enter your comments..."
						/>
					</div>

					<div className="max-w-[350px]  text-center justify-between">
						<div className="items-center gap-4 white-paragraph my-5">
							<p>
								By clicking Submit button I agree to the{" "}
								<span className="text-white underline">
									<Link href="/">Terms and Conditions</Link>
								</span>
							</p>
						</div>
						<Button
							onClick={() => setIsPopup(true)}
							variant="secondary"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</form>
			)}
		</section>
	);
};
