"use client"; //for importing "styled"
import Link from "next/link";
import styled from "styled-components";

const HomePageWrapper=styled.div`
    background-color: #abd1f3;
    height: auto;
    width: 85%;
    margin: 0 auto;
    color: #505050;
    font-family: var(--font-serif), serif;
`;

const HomeHeader = styled.h1`
    padding: 5vw;
    margin: 2vw;
    border-radius: 10px;
    background-color: #c2e0f9;
    text-align: center;
    font-size: 3vw;
`;

const SampleChapters = styled.div`
    padding: 5vw;
    margin: 2vw;
    background-color: #c2e0f9;
    border-radius: 10px;
    font-size: 1vw;
`

const UserInstructions = styled.div`
    padding: 5vw;
    margin: 2vw;
    background-color: #c2e0f9;
    border-radius: 10px;
    font-size: 1vw;
`

export default function Home() {
    return (
      <HomePageWrapper>
          <HomeHeader>Bible Verse Explorer 📖 </HomeHeader>
          <SampleChapters>
              <h3>Selected Chapters:</h3>
              <p><em>click to see selected chapters</em></p>
              <ul>
                  <li><Link href="/JHN.3">John 3</Link></li>
                  <li><Link href="/GEN.1">Genesis 1</Link></li>
                  <li><Link href="/PSA.23">Psalm 23</Link></li>
              </ul>
          </SampleChapters>
          <UserInstructions>
              <h3><strong>Instructions for Custom Fetches</strong></h3>
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
          </UserInstructions>
      </HomePageWrapper>
    );
}