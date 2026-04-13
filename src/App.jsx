import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home   from './pages/Home'
import About  from './pages/About'
import Detect from './pages/Detect'

export default function App() {
  const [page, setPage] = useState('home')

  function renderPage() {
    switch (page) {
      case 'home':   return <Home setPage={setPage} />
      case 'about':  return <About />
      case 'detect': return <Detect />
      default:       return <Home setPage={setPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] bg-grid">
      <Navbar currentPage={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}