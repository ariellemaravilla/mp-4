import { getChapter } from "../../lib/getChapter"

type Verse = {
    id: string;
    reference: string;
    text: string;
};

export default async function ChapterPage({ params }: { params: {chapter: string} }) {
    try {
        const data = await getChapter(params.chapter);

        return (
            <div>
                <h2>Chapter: {params.chapter}</h2>
                <ul>
                    {data.verses.map((verse: Verse)=> (
                        <li key={verse.id}>
                            <strong>{verse.reference}</strong>: {verse.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (err) {
        return (
            <div>
                <p>Could not load the chapter.</p>
            </div>
        );
    }
}