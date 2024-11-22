'use client'

import {useState} from 'react';
import ArticleTable from './table';
import SearchBar from './search';
import type { Article } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image'

import Dlogo from './logo/dark-logo.svg'
import Llogo from './logo/light-logo.svg'

export default function News({articles}: {articles: Array<Article>}) {
    const [filterText, setFilterText] = useState('')

    return (
        <>
            <div className={`p-8 bg-white dark:bg-gray-800 shadow-lg`}>
                <Image className="hidden dark:block h-24 w-24"
                    src={Dlogo}
                    alt="logo"
                    layout="algin" 
                    objectFit="contain"
                    />
                <Image className="block dark:hidden h-24 w-24"
                    src={Llogo}
                    alt="logo"
                    layout="algin" 
                    objectFit="contain"
                    />
                <h1 className=" text-center text-gray-600 dark:text-gray-300 text-4xl font-semibold">
                    Новости
                </h1>
                <div className="flex justify-center mb-5">
                    <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
                    <Link className="ml-2 p-2 bg-gray-700 text-white dark:text-gray-100 rounded-md hover:bg-gray-600" href='addArticles'>Предложить новость</Link>
                </div>
                <ArticleTable articles={articles} filterText={filterText}/>
            </div>
        </>
    )
}