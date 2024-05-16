// @ts-nocheck

"use client";

import React, { useState } from "react";

const BathroomRemodelCalculator: React.FC = () => {
	const [size, setSize] = useState(0);
	const [remodelType, setRemodelType] = useState("full");
	const [costPerSqFt, setCostPerSqFt] = useState(100); // Example cost per square foot

	const calculateCost = ():number => {
		const baseCost = size * costPerSqFt;
		let additionalCost = 0;

		// Example logic for additional costs based on remodel type
		if (remodelType === "full") {
			additionalCost = baseCost * 0.2; // 20% additional cost for a full remodel
		} else if (remodelType === "partial") {
			additionalCost = baseCost * 0.1; // 10% additional cost for a partial remodel
		}

		return baseCost + additionalCost;
	};

	return (
		<div className="mb-[100px] max-md:mb-[50px]">
			<h1>Bathroom Remodel Calculator</h1>
			<label>
				Bathroom Size (sq ft):
				<input
					type="number"
					value={size}
					onChange={(ele) => setSize(ele.target.value)}
				/>
			</label>
			<label>
				Remodel Type:
				<select
					value={remodelType}
					onChange={(ele) => setRemodelType(ele.target.value)}
				>
					<option value="full">Full Remodel</option>
					<option value="partial">Partial Remodel</option>
				</select>
			</label>
			<button
				onClick={() => alert(`Estimated Cost: $${calculateCost()}`)}
			>
				Calculate Cost
			</button>
		</div>
	);
};

export default BathroomRemodelCalculator;
