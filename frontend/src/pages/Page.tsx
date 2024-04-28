import { ReactNode } from "react";
import { Sidebar, User } from "../components";

type PageProps = {
  typeSidebar?: 'student' | 'admin' | 'teacher'
  showSidebar?: boolean
  children: ReactNode
}
export function Page({ children, typeSidebar, showSidebar = true }: PageProps) {
  return (
    <div className="flex h-screen pt-3 md:p-4 bg-gray-500">
      {showSidebar && <Sidebar type={typeSidebar} />}
      <div className="flex-1">
        <User data={{ name: 'User', period: '7º período' }} />
        {children}
      </div>
    </div>
  )
}