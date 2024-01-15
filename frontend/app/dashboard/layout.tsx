

export default function DashboardLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-screen h-screen bg-white overflow-hidden">
            {children}
        </section>
    )
}