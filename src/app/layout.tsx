import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {Footer} from "./_components/footer";
import {Header} from "@/app/_components/header/header";
import cn from "classnames";
import styles from './page.module.scss'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "АСК",
    description: "АСК",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
        <body className={cn(inter.className, styles.main)}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
