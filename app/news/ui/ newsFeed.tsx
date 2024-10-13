'use client'

import {useState} from 'react';
import ArticleTable from './table';
import SearchBar from './search';
import type { Article } from '@prisma/client';

export default function News({articles}: {articles: Array<Article>}) {
    const [filterText, setFilterText] = useState('')

    return (
        <>
            <div className={`p-8 bg-white dark:bg-gray-800 shadow-lg`}>
                <h1 className="text-center text-gray-600 dark:text-gray-300 text-4xl font-semibold">Новости</h1>
                <div className="flex justify-center mb-5">
                    <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
                    <a className="ml-2 p-2 bg-gray-700 text-white dark:text-gray-100 rounded-md hover:bg-gray-600" href='addArticles'>Предложить новость</a>
                </div>
                <ArticleTable articles={articles} filterText={filterText}/>
            </div>
        </>
    )
}