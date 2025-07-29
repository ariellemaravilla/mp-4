"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/${input}`);
    };

    return (
        <main style={{ textAlign: "center", marginTop: "4rem" }}>
            <h1>📖 Bible Verse Generator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. JHN.3.16"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ padding: "8px", width: "200px" }}
                />
                <button
                    type="submit"
                    style={{ marginLeft: "10px", padding: "8px 16px" }}
                >
                    Generate
                </button>
            </form>
        </main>
    );
}
