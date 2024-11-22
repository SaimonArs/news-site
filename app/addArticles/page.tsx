'use client'
import { addArticle } from '../lib/addData';
import { useRouter } from 'next/navigation';
    
export default function AddNewArticle() {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        await addArticle(formData);

        router.back();
    };

    return (
        <>
        <div className="container mx-auto mt-12 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-center text-gray-600 dark:text-gray-300 text-2xl font-semibold">Добавление новости</h1>
            <form className="flex flex-col mt-6" action={handleSubmit}>
                <label htmlFor="text" className="mt-4 font-bold dark:text-gray-300">Заголовок</label>
                <input type="text" id="text" name="Article" placeholder="Введите заголовок" required className="p-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400" />
            
                <label htmlFor="link" className="mt-4 font-bold dark:text-gray-300">Ссылка</label>
                <input type="url" id="link" name="Link" placeholder="Введите ссылку" required className="p-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"/>
            
                <label htmlFor="date" className="mt-4 font-bold dark:text-gray-300">Дата</label>
                <input type="date" id="date" name="Date" required className="p-2 mt-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100"/>
            
                <button 
                className='mt-6 p-2 bg-gray-600 dark:bg-gray-700 text-white dark:text-gray-100 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600'
                type="submit"
                >
                Добавить новость
                </button>
            </form>
        </div>
        </>
    )
}