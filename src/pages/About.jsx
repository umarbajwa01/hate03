const cards = [
  {
    icon: '🎯',
    title: 'Our Purpose',
    body: 'HateGuard was built to help moderate online content automatically, flagging harmful language before it spreads and causes real-world harm to individuals and communities.',
  },
  {
    icon: '🧠',
    title: 'Machine Learning',
    body: 'Powered by a trained NLP classifier, the system understands linguistic patterns and context to distinguish between hate speech and legitimate expression with high accuracy.',
  },
  {
    icon: '🌍',
    title: 'Societal Impact',
    body: 'Hate speech online can lead to discrimination, harassment, and violence. Automated detection at scale allows platforms to act quickly and protect vulnerable users.',
  },
  {
    icon: '📊',
    title: 'Confidence Scoring',
    body: 'Every prediction comes with a confidence percentage, giving moderators and developers clear insight into how certain the model is about each classification.',
  },
]

const steps = [
  { num: '01', title: 'Input Text',          desc: 'User submits text through the detection interface.' },
  { num: '02', title: 'Pre-processing',       desc: 'The backend cleans and tokenizes the input for the model.' },
  { num: '03', title: 'ML Classification',    desc: 'A trained classifier predicts whether the text contains hate speech.' },
  { num: '04', title: 'Result + Confidence',  desc: 'The system returns the verdict and a confidence percentage instantly.' },
]

const techs = ['Python', 'Flask', 'scikit-learn', 'NLTK', 'React', 'Vite', 'REST API']

export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

      {/* Header */}
      <header className="mb-12 animate-fade-up">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#ffd60a] mb-3">
          Project Overview
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] text-gray-100 mb-4">
          ABOUT THE SYSTEM
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed border-l-[3px] border-[#ffd60a] pl-5 mt-6">
          HateGuard is an AI-powered hate speech detection tool designed to make
          online spaces safer. It uses machine learning to analyze text and flag
          harmful content in under a second.
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 animate-fade-up-1">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative bg-[#111111] border border-[#1f1f1f] rounded-xl p-7
                       transition-all duration-200 overflow-hidden
                       hover:border-[#2a2a2a] hover:bg-[#181818] hover:-translate-y-0.5
                       hover:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#ffd60a]
                            scale-x-0 origin-left transition-transform duration-300
                            group-hover:scale-x-100" />
            <span className="text-3xl mb-3 block">{card.icon}</span>
            <h3 className="font-display text-xl text-gray-100 mb-2 tracking-wide">{card.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <section className="mt-12 animate-fade-up-2">
        <h2 className="font-display text-3xl text-gray-100 mb-6 tracking-wide">HOW IT WORKS</h2>
        <div className="flex flex-col divide-y divide-[#1f1f1f] rounded-xl overflow-hidden border border-[#1f1f1f]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-5 bg-[#111111] px-6 py-5
                         transition-colors duration-200 hover:bg-[#181818]"
            >
              <span className="font-mono text-xs font-bold text-[#ffd60a]
                               bg-[#ffd60a15] border border-[#ffd60a30]
                               px-2 py-0.5 rounded flex-shrink-0 mt-0.5 tracking-wider">
                {step.num}
              </span>
              <div>
                <strong className="block text-sm font-semibold text-gray-100 mb-0.5">{step.title}</strong>
                <span className="text-sm text-gray-400">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-12 animate-fade-up-3">
        <h2 className="font-display text-3xl text-gray-100 mb-6 tracking-wide">TECH STACK</h2>
        <div className="flex flex-wrap gap-2">
          {techs.map((t) => (
            <span
              key={t}
              className="font-mono text-xs font-bold text-gray-400
                         bg-[#111111] border border-[#1f1f1f] px-4 py-2 rounded
                         transition-all duration-200
                         hover:text-[#ffd60a] hover:border-[#ffd60a40] hover:bg-[#ffd60a10]"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}