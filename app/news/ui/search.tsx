'use client'
export default function SearchBar(prop: {
    filterText: string,
    onFilterTextChange: (value: string) => void;
}) {
    return (
        <input 
        className="w-1/2 p-2 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
        type="text"
        value={prop.filterText} placeholder="Search..."
        onChange={(e) => prop.onFilterTextChange(e.target.value)}
        />
)}