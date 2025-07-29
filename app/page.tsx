import Link from "next/link";
import styled from "styled-components";

export default function Home() {
    return (
      <div>
          <h1>Bible Verrse Explorer 📖 </h1>
          <h3>Selected Chapters:</h3>
          <ul>
              <li><Link href="/JHN.3">John 3</Link></li>
              <li><Link href="/GEN.1">Genesis 1</Link></li>
              <li><Link href="/PSA.23">Psalm 23</Link></li>
          </ul>
          <br />
          <p>
              <em>
              To view specific chapters, add the chapter ID to the end of the URL using the following format:
              <br />
              <br />
              <br />
              <code>/BOOK.CHAPTER</code>
              <br />
              <br />
              <br /> Example 1: <code>/MAT.4</code> for Matthew 4
              </em>
          </p>
          <br />
          <h4>Common Book Abbreviations</h4>
          <ul>
              <li><strong>GEN</strong> – Genesis</li>
              <li><strong>EXO</strong> – Exodus</li>
              <li><strong>LEV</strong> – Leviticus</li>
              <li><strong>PSA</strong> – Psalms</li>
              <li><strong>MAT</strong> – Matthew</li>
              <li><strong>MRK</strong> – Mark</li>
              <li><strong>LUK</strong> – Luke</li>
              <li><strong>JHN</strong> – John</li>
              <li><strong>ACT</strong> – Acts</li>
              <li><strong>ROM</strong> – Romans</li>
          </ul>
      </div>
    );
}