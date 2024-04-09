import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

type PageProps = {
  showSidebar?: boolean
  children: ReactNode
}

export function Page({ children, showSidebar = true }: PageProps) {
  return (
    <div className="flex h-screen p-4 bg-gray">
      {showSidebar && <Sidebar />}
      {children}
    </div>
  )
}