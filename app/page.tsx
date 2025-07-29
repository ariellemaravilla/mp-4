import Link from "next/link";

export default function Home() {
    return (
      <div>
          <h1>Bible Search Engine</h1>
          <h3>Popular Chapter</h3>
          <ul>
              <li><Link href="/JHN.3">John 3</Link></li>
              <li><Link href="/GEN.1">Genesis 1</Link></li>
              <li><Link href="/PSA.23">Psalm 23</Link></li>
          </ul>
      </div>
    );
}