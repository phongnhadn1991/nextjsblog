import DashSideBar from "@/components/dashboard/common/DashSideBar";
import DashNavbar from "@/components/dashboard/common/DashNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers"
import { ThemeProvider } from "@/components/ThemeProvider";

export default async function DashboardLayout({ children }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider defaultOpen={defaultOpen}>
                <div className="flex w-full">
                    <aside>
                        <DashSideBar />
                    </aside>
                    <main className="w-full">
                        <DashNavbar />
                        <div className="px-4">
                            {children}
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}