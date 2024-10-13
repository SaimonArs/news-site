import getArticle from "../lib/getData"
import News from "./ui/ newsFeed";
export default async function Page() {
    const articles = await getArticle();
    return (
        <>
            <News articles={articles}/>
        </>
    )
}

