import getVerse from "@/lib/getVerse";
import type { BibleVerse } from "@/types";
import type { JSX } from "react";


type PageProps = {
    params: {
        verse: string;
    };
};

export default async function VersePage({
                                            params,
                                        }: PageProps): Promise<JSX.Element> {
    const verse: BibleVerse | undefined | null = await getVerse(params.verse);

    if (!verse)
        return (
            <p style={{ textAlign: "center" }}>
                Verse not found or API limit reached.
            </p>
        );

    return (
        <main style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
                {verse.reference}
            </h1>
            <p
                style={{ fontSize: "1.25rem", lineHeight: "1.6" }}
                dangerouslySetInnerHTML={{ __html: verse.content }}
            />
        </main>
    );
}
