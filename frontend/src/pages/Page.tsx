import { ReactNode } from "react";
import { Sidebar, User } from "../components";

type PageProps = {
  showSidebar?: boolean
  children: ReactNode
}

export function Page({ children, showSidebar = true }: PageProps) {
  return (
    <div className="flex h-screen p-4 bg-gray-500">
      {showSidebar && <Sidebar type="admin"/>}
      <div className="flex-1 mt-14">
        <User data={{ name: 'User', period: '7º período' }} />
        {children}
      </div>
    </div>
  )
}