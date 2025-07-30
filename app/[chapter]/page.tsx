
import { getChapter } from "../../lib/getChapter"
import styled from "styled-components";
import DynamicPageWrapper from "../components/ChapterStyles";


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
            <DynamicPageWrapper>
                <h2>Chapter: {chapter}</h2>
                <ul>
                    {data.verses.map((verse: Verse)=> (
                        <li key={verse.id}>
                            <strong>{verse.reference}</strong>:
                            <div dangerouslySetInnerHTML={{ __html: verse.text }} />  {/*used to hide HTML tags returned by API*/}
                        </li>
                    ))}
                </ul>
            </DynamicPageWrapper>
        );
    } catch (error) {
        return (
                <p>Could not load the chapter.</p>
        );
    }
}