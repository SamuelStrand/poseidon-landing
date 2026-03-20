import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileBottomNav } from '../ui/MobileBottomNav'
import { RapidContactDock } from '../ui/RapidContactDock'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <RapidContactDock />
      <MobileBottomNav />
    </div>
  )
}
