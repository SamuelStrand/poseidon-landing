import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { BusinessClientsPage } from '../pages/BusinessClientsPage'
import { CasesPage } from '../pages/CasesPage'
import { ContactsPage } from '../pages/ContactsPage'
import { HomePage } from '../pages/HomePage'
import { PrivateClientsPage } from '../pages/PrivateClientsPage'
import { ServicesPage } from '../pages/ServicesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'private-clients', element: <PrivateClientsPage /> },
      { path: 'business-clients', element: <BusinessClientsPage /> },
      { path: 'cases', element: <CasesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contacts', element: <ContactsPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
