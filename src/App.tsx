import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import type { Page } from './types'

export default function App() {
  const [page, setPage] = useState<Page>('login')

  return page === 'login'
    ? <LoginPage onLogin={() => setPage('dashboard')} />
    : <DashboardPage />
}
