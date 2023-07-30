import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import QRPage from './pages/QRPage'
import MainPage from './pages/MainPage'
import NoMatch from './pages/NoMatch'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'

export default function App () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={''}>
            <Route index element={<MainPage />} />
            <Route path='generator' element={<QRPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<'dark' | 'light'>('dark')

  const Dark = 'bg-slate-700 text-white'
  const Light = 'bg-slate-300 text-black'

  return (
    <div
      className={`lg:min-h-screen flex flex-col  w-full sm:min-h-[100dvh] gap-16  ${
        isDarkMode === 'light' ? Light : Dark
      }`}
    >
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
