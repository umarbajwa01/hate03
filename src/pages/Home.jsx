export default function Home({ setPage }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[480px] h-[280px]
                      bg-[radial-gradient(ellipse_at_center,rgba(255,214,10,0.08)_0%,transparent_70%)]
                      blur-3xl pointer-events-none" />

      {/* Badge */}
      <div className="animate-fade-up inline-flex items-center gap-2 mb-8
                      bg-[#ffd60a15] border border-[#ffd60a40] text-[#ffd60a]
                      text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd60a] animate-pulse-dot" />
        ML-Model Detection System
      </div>

      {/* Title */}
      <h1 className="animate-fade-up-1 font-display text-[clamp(3.5rem,10vw,7rem)]
                     tracking-wider text-gray-100 leading-none mb-6">
        Hate Speech
        <span className="block text-[#ffd60a]">Detection</span>
      </h1>

      {/* Subtitle */}
      <p className="animate-fade-up-2 max-w-lg text-[1.05rem] text-gray-400 leading-relaxed mb-12">
        An intelligent system that analyzes text content and identifies hate speech
        in real time — helping make online platforms safer and more inclusive for everyone.
      </p>

      {/* Actions */}
      <div className="animate-fade-up-3 flex items-center gap-4 flex-wrap justify-center mb-20">
        <button
          onClick={() => setPage('detect')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded
                     bg-[#ffd60a] text-black font-bold text-base
                     transition-all duration-200
                     hover:bg-[#ffe033] hover:-translate-y-0.5
                     hover:shadow-[0_8px_32px_rgba(255,214,10,0.3)]"
        >
           Try Detection
        </button>
        <button
          onClick={() => setPage('about')}
          className="px-7 py-3.5 rounded text-base font-medium text-gray-400
                     border border-[#2a2a2a] transition-all duration-200
                     hover:text-gray-100 hover:border-[#ffd60a50] hover:bg-[#ffd60a15]"
        >
          Learn More
        </button>
      </div>

      {/* Stats */}
      <div className="animate-fade-up-4 flex items-center gap-12 flex-wrap justify-center mb-16">
        {[
          { value: '80%+', label: 'Accuracy' },
          { value: '<5s',  label: 'Response Time' },
          { value: 'ML',   label: 'Powered' },
        ].map((stat, i, arr) => (
          <div key={stat.label} className="flex items-center gap-12">
            <div className="text-center">
              <span className="block font-display text-4xl text-[#ffd60a] tracking-wider">
                {stat.value}
              </span>
              <span className="text-xs text-[#444] uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <div className="w-px h-10 bg-[#2a2a2a]" />
            )}
          </div>
        ))}
      </div>

      {/* Feature chips */}
      <div className="animate-fade-up-5 flex gap-3 flex-wrap justify-center">
        {[
          { icon: '', label: 'Machine Learning' },
          { icon: '', label: 'Real-time Analysis' },
          { icon: '', label: 'Confidence Score' },
          { icon: '', label: 'Detect English Text' },
        ].map((chip) => (
          <div
            key={chip.label}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full
                       bg-[#111111] border border-[#1f1f1f] text-gray-400 text-sm font-medium
                       transition-all duration-200 hover:border-[#2a2a2a] hover:text-gray-100"
          >
            <span>{chip.icon}</span>
            {chip.label}
          </div>
        ))}
      </div>
    </main>
  )
}