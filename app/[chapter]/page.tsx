import { getChapter } from "../../lib/getChapter"

type Verse = {
    id: string;
    reference: string;
    text: string;
};

export default async function ChapterPage({params,}: {params: Promise<{chapter: string }>;}){ //Wrapping in Promise due to Vercel Issues
    const { chapter } = await params;

    try {
        const data = await getChapter(chapter);

        return (
            <div>
                <h2>Chapter: {chapter}</h2>
                <ul>
                    {data.verses.map((verse: Verse)=> (
                        <li key={verse.id}>
                            <strong>{verse.reference}</strong>:
                            <div dangerouslySetInnerHTML={{ __html: verse.text }} />  {/*used to hide HTML tags returned by API*/}
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        return (
                <p>Could not load the chapter.</p>
        );
    }
}