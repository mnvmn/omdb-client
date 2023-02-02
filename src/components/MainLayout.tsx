import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Outlet />
      <div>footer</div>
    </div>
  )
}
