import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "S_O_",
    description: "",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextThemesProvider
                    defaultTheme="system"
                    attribute="class"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen">{children}</div>
                </NextThemesProvider>
            </body>
        </html>
    )
}
