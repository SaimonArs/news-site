import { Article, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getArticle(): Promise<Array<Article>> {
  // Загрузка данных из базы данных
  const articles = await prisma.article.findMany();

  return articles
    
}