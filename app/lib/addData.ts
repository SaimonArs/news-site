'use server'
import { PrismaClient } from '@prisma/client';

export async function addArticle(formData: FormData) {
    const prisma = new PrismaClient()
    const rawFormData = {
        Article: formData.get('Article'),
        Link: formData.get('Link'),
        Date: formData.get('Date'),
      }
   
    let article = {
          "Article": rawFormData.Article?.toString() !== undefined ? rawFormData.Article?.toString() : 'null',
          "Link": rawFormData.Link?.toString() !== undefined ? rawFormData.Link?.toString() : 'null',
          "Date": rawFormData.Date?.toString() !== undefined ? rawFormData.Date?.toString() : 'null',
        } 

    const a = await prisma.article.create({
        data: {
            title: article['Article'],
            link: article['Link'],
            date: article['Date']
          },
    })
    console.log(a);
}