import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const HomeLayout = ({ children }: any) => {
    return (
        <main className={`${inter.className}`}>{children}</main>
    )
}