import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-serif",
});


export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={sourceSerif.variable}>
                {children}
            </body>
        </html>
    );
}
