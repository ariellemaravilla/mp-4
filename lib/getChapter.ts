/* Notes:
// - Server-only function to fetch verse using API Key
// - await: pause program until fetch is complete
// - async: allows function to use await
// - fetch(): API call
// - headers: allows APIkey to be sent along w the request
 */
type VerseMeta = { id: string };

export async function getChapter(chapterId: string) {
    console.log("Fetching:", chapterId); //Debugging

    const result = await fetch(`https://api.scripture.api.bible/v1/bibles/${process.env.BIBLE_ID}/chapters/${chapterId}/verses`,
        {
            headers: {
                "api-key": process.env.BIBLE_API_KEY!,
            },
        }
    );


    // Check if fetch was successful -> no: stop everything + crash
    if (!result.ok) throw new Error("Chapter not found");

    const json = await result.json();
    const verseIds: string[] = (json.data as VerseMeta[]).map((v) => v.id);

    // Fetch each verse’s full content
    const verses = await Promise.all(
        verseIds.map(async (id) => {
            const res = await fetch(
                `https://api.scripture.api.bible/v1/bibles/${process.env.BIBLE_ID}/verses/${id}`,
                {
                    headers: {
                        "api-key": process.env.BIBLE_API_KEY!,
                    },
                }
            );
            const verseJson = await res.json();
            return {
                id,
                reference: verseJson.data.reference,
                text: verseJson.data.content, // HTML string!
            };
        })
    );

    return { verses };
}                      //sending back data of API response
