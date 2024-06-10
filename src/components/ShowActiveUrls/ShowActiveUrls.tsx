import React from 'react';

interface ShowActiveUrlsProps {
  item: string;
  uniqueParts: string[];
  handleSelectItem: (item: string) => void;
  isSelected: boolean;
}

const ShowActiveUrls: React.FC<ShowActiveUrlsProps> = ({ item, uniqueParts, handleSelectItem, isSelected }) => {
  const isDisabled = uniqueParts.some(part => item.includes(part));

  return (
    <button
      onClick={() => handleSelectItem(item)}
      className={`py-2 px-4 rounded ${isSelected ? 'bg-main-yellow-dark' : isDisabled ? 'bg-main-yellow-dark' : 'bg-main-yellow hover:bg-main-yellow-light'} text-white font-bold`}
      disabled={isDisabled}
    >
      {isSelected ? 'Selected' : isDisabled ? 'Scraped':'Select'}
    </button>
  );
};

export default ShowActiveUrls;
