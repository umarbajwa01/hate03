export default function Navbar({ currentPage, setPage }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 h-16
                    bg-[#0a0a0ad8] backdrop-blur-md border-b border-[#1f1f1f]">

      {/* Logo */}
      <div className="flex items-center gap-3 select-none">
        <div className="w-8 h-8 bg-[#ffd60a] rounded-md flex items-center justify-center text-base">
          🛡️
        </div>
        <span className="font-display text-xl tracking-widest text-gray-100">
          HATE<span className="text-[#ffd60a]">GUARD</span>
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage('home')}
          className={`px-4 py-1.5 rounded text-sm font-medium border transition-all duration-200
            ${currentPage === 'home'
              ? 'text-[#ffd60a] border-[#ffd60a50] bg-[#ffd60a15]'
              : 'text-gray-400 border-transparent hover:text-gray-100 hover:border-[#2a2a2a] hover:bg-[#181818]'
            }`}
        >
          Home
        </button>

        <button
          onClick={() => setPage('about')}
          className={`px-4 py-1.5 rounded text-sm font-medium border transition-all duration-200
            ${currentPage === 'about'
              ? 'text-[#ffd60a] border-[#ffd60a50] bg-[#ffd60a15]'
              : 'text-gray-400 border-transparent hover:text-gray-100 hover:border-[#2a2a2a] hover:bg-[#181818]'
            }`}
        >
          About
        </button>

        <button
          onClick={() => setPage('detect')}
          className="ml-2 px-5 py-1.5 rounded text-sm font-bold bg-[#ffd60a] text-black
                     border border-[#ffd60a] transition-all duration-200
                     hover:bg-[#ffe033] hover:shadow-[0_0_24px_rgba(255,214,10,0.3)]
                     hover:-translate-y-0.5"
        >
          Try Detection →
        </button>
      </div>
    </nav>
  )
}