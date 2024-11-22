import { Article, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

type ArticleProps = {
  params: { id: string };
};

export default async function ArticlePage({ params }: ArticleProps) {
  const article = await prisma.article.findUnique({
    where: { id: Number(params.id) },
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
      <a href={article.link} className="text-gray-600 dark:text-blanchedalmond hover:underline mb-4 block">{article.link}</a>
      <p className="text-sm text-gray-500 dark:text-gray-400">{article.date}</p>
    </div>
  );
}