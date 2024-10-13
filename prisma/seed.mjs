import ARTICLES from '../articles_data.json' assert { type: 'json' };
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    ARTICLES.forEach(async article => {
        const a = await prisma.article.create({
            data: {
              title: article['Article'],
              link: article['Link'],
              date: article['Date']
            },
          });
        
          console.log({a});
      });
  
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });