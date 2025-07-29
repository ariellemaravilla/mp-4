/* Notes:
// - Server-only function to fetch verse using API Key
// - await: pause program until fetch is complete
// - async: allows function to use await
// - fetch(): API call
// - headers: allows APIkey to be sent along w the request
 */

export async function getChapter(chapterId: string) {
    const result = await fetch(`https://api.scripture.api.bible/v1/bibles/${process.env.BIBLE_ID}/chapters/${chapterId}/verses`,
        {
            headers: {
                "api-key": process.env.BIBLE_API_KEY!,
            },
        }
    );


    // Check if fetch was successful -> no: stop everything + crash
    if (!result.ok) throw new Error("Chapter not found.");

    const json = await result.json();      // convert raw fetch result into json, "await" wait until parsing finishes
    return json.data;                           //sending back data of API response
}