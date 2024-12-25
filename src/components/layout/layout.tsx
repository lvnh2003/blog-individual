import Sidebar from "./sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <Sidebar />
                {children}
        </div>
    )
}