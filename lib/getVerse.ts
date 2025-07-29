// Notes
/*
server-side helper function: runs only on the server and is used to fetch external data
 */


"use server"; // marks file as server-side function
import type { BibleVerse } from "@/types";


const BIBLE_API_KEY = process.env.BIBLE_API_KEY;

export default async function getVerse(passage: string,): Promise<BibleVerse | undefined> {
    try {
        if (!passage) return undefined;

        const res = await fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${passage}`,
            {
                headers: {
                    "api-key": BIBLE_API_KEY!,
                },
            }
        );

        // if (res.status === 429) return null; // too many requests
        // if (!res.ok) return undefined; // anything else that's not 200


        const jsonRes = await res.json();
        return {
            reference: jsonRes.data.reference,
            content: jsonRes.data.content,
        };

    } catch (error) {
        console.log("Error: Cannot Fetch Verse", error);
        return undefined;
    }
}