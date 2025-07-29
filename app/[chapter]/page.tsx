import { getChapter } from "../../lib/getChapter"

type Verse = {
    id: string;
    reference: string;
    text: string;
};

type Props = {
    params: Record<"chapter", string>;
};

export default async function ChapterPage(props: Props) {
    const { chapter } = await props.params;
    try {
        const data = await getChapter(chapter);

        return (
            <div>
                <h2>Chapter: {chapter}</h2>
                <ul>
                    {data.verses.map((verse: Verse)=> (
                        <li key={verse.id}>
                            <strong>{verse.reference}</strong>:
                            <div dangerouslySetInnerHTML={{ __html: verse.text }} />
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