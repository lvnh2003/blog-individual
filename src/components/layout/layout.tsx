import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}