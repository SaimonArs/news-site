'use client'
import { Article } from "@prisma/client";
import Link from "next/link";

function ArticleRow(prop: {article: Article}) {
    return (
      <tr>
        <td className="p-3 border-b border-gray-300 dark:border-gray-600">{prop.article.title}</td>
        <td className="p-3 border-b border-gray-300 dark:border-gray-600"> 
          <Link className="text-sky-700 dark:text-blanchedalmond" href={`/news/${prop.article.id}`}>{prop.article.link}</Link>
          </td>
        <td className="p-3 border-b border-gray-300 dark:border-gray-600">{prop.article.date}</td>
      </tr>
    );
  };
  
export default function ArticleTable(prop: {articles: Array<Article>, filterText: string}) {
    const rows: Array<any> = [];
    let idx = 0;
    prop.articles.forEach(article => {
      if (article.title.toLowerCase().indexOf(
          prop.filterText.toLowerCase()
      ) === -1 ) {
          return;
      }
      rows.push(<ArticleRow key={idx} article={article}/>)
      idx += 1;
    });
    
    return (
      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-left bg-gray-100 dark:bg-gray-700">Название</th>
            <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-left bg-gray-100 dark:bg-gray-700">Ссылка</th>
            <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-left bg-gray-100 dark:bg-gray-700">Дата</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  