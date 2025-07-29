// app/[verse]/page.tsx
import getVerse from "@/lib/getVerse";
import type { BibleVerse } from "@/types";

type PageProps = {
    params: {
        verse: string;
    };
};

export default async function VersePage({ params }: PageProps) {
    const verse: BibleVerse | null | undefined = await getVerse(params.verse);

    if (!verse) {
        return <p>Verse not found</p>;
    }

    return (
        <main>
            <h1>{verse.reference}</h1>
            <p dangerouslySetInnerHTML={{ __html: verse.content }} />
        </main>
    );
}
