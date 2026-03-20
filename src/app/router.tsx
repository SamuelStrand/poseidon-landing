import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { CasesPage } from '../pages/CasesPage'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'cases', element: <CasesPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
