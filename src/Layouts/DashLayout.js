import { DashHeader } from './DashHeader'
import { DashFooter } from './DashFooter'
import { Outlet } from 'react-router-dom'


export function DashLayout() {
  return (
    <>
        <DashHeader />
        <div className="dash-container">
            <Outlet />
        </div>
        <DashFooter />
    </>
  )
}