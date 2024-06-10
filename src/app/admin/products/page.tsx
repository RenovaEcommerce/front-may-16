'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from '@nextui-org/react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ShowActiveUrls from '@/components/ShowActiveUrls/ShowActiveUrls';

export default function Products() {
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [inputUrl, setInputUrl] = useState<string>('');
    const [urls, setUrls] = useState<string[]>([]);
    const [no, setNo] = useState<number>(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [catData, setCatData] = useState({ category: '', url: '', endpoint: '' });
    const [uniqueParts, setUniqueParts] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        console.log('Selected value:', event.target.value);
    };

    const rowsPerPage = 10;
    const pages = Math.ceil(urls.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return urls.slice(start, end);
    }, [page, urls]);

    const handleExtractData = async (item: string | string[]) => {
        const data = {
            urls: Array.isArray(item) ? item : [item],
            category: catData?.category,
        };
        try {
            await axios
                .post('http://localhost:4100/products/add/products', data)
                .then((response) => {
                    if (response.status === 201) {
                        toast.success('Products Scraping Started In The Background!');
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong with server');
                });
        } catch (error) {
            toast.error('Something went wrong with server');
        }
    };

    const handleScrapeAllUrls = async () => {
        try {
            await axios
                .put('http://localhost:4100/products-links/get-urls', { no, category: catData?.category })
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response);
                        setUrls(response.data);
                        toast.success('Urls Scrapped Successfully!');
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong with server');
                });
        } catch (error) {
            toast.error('Something went wrong with server');
        }
    };

    const fetchScrapedUrls = async (category: string | null) => {
        setLoading(true);
        try {
            const response = await axios.get<string[]>(`http://localhost:4100/products-links?category=${category}`);
            setUrls(response.data);
        } catch (error) {
            console.error('Error fetching category URLs:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchScrapedProductsUids = async (category: string | null) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:4100/products/get-uids`, { category });
            setUniqueParts(response.data)
        } catch (error) {
            console.error('Error fetching category URLs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectItem = (item: string) => {
        setSelectedItems((prevSelectedItems) => {
            const updatedItems = prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((i) => i !== item)
                : [...prevSelectedItems, item].slice(-5);

            return updatedItems;
        });
    };

    const handleAddUrl = () => {
        if (inputUrl.trim()) {
            setSelectedItems((prevSelectedItems) => {
                const updatedItems = [...prevSelectedItems, inputUrl].slice(-5);
                return updatedItems;
            });
            setInputUrl('');
        }
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item') ?? '');
        setCatData(data);
        fetchScrapedProductsUids(data?.category)
        fetchScrapedUrls(data?.category);
    }, [selectedOption]);

    //   const handleNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = Number(e.target.value);
    //     if (value >= 0) {
    //       setNo(value);
    //     } else {
    //       setNo(0);
    //     }
    //   };

    return (
        <div className="container mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-1 overflow-auto">
                <div className="w-full p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Extract Data</h1>

                    <div className="flex justify-center mb-4">
                        <input
                            type="text"
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                            placeholder="Enter URL"
                            className="p-2 border border-gray-300 rounded mr-2 w-2/3"
                        />
                        <button
                            className="bg-main-yellow hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleAddUrl}
                        >
                            Add URL
                        </button>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-center">Selected Items</h2>
                        <ul className="list-disc list-inside overflow-auto max-h-48">
                            {selectedItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            className="bg-main-yellow hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => handleExtractData(selectedItems)}
                        >
                            Scrape Products
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-auto">
                <div className="text-center">
                    <button
                        className="bg-main-yellow hover:bg-main-yellow-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleScrapeAllUrls()}
                    >
                        Scrape Links
                    </button>
                    <span className="text-white mx-1">Total Products: {urls?.length}</span>
                </div>
                {loading ? (
                    <div className="flex text-white justify-center items-center min-h-[300px]">Loading...</div>
                ) : (
                    <Table
                        aria-label="Example table with client-side pagination"
                        style={{ color: 'white' }}
                        bottomContent={
                            <div className="flex w-full justify-center">
                                <Pagination
                                    isCompact
                                    showControls
                                    showShadow
                                    color="default"
                                    page={page}
                                    total={pages}
                                    onChange={setPage}
                                    style={{ color: 'white' }}
                                />
                            </div>
                        }
                    >
                        <TableHeader>
                            <TableColumn>No:</TableColumn>
                            <TableColumn>Url</TableColumn>
                            <TableColumn>Action</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {items?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                                    <TableCell>{item}</TableCell>
                                    <TableCell>
                                        <ShowActiveUrls
                                            item={item}
                                            uniqueParts={uniqueParts}
                                            handleSelectItem={handleSelectItem}
                                            isSelected={selectedItems.includes(item)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>
        </div>
    );
}
