import { BoardProvider } from '@/context/BoardContext'



export default function BoardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <BoardProvider>
            <section className="w-screen h-screen bg-white overflow-hidden">
                {children}
            </section>
        </BoardProvider>
    )
}