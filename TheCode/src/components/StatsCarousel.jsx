const StatsCarousel = () => {
  const stats = [
    { value: '+4,881 m', label: 'aluminium bait fishing', active: false },
    { value: '+4,423 m', label: 'aluminium bait fishing', active: true },
    { value: '+3,910 m', label: 'aluminium bait fishing', active: false },
  ];

  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
          <span className="text-slate-600">←</span>
        </button>

        {/* Stats Cards */}
        <div className="flex items-end gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all ${
                stat.active ? 'opacity-100' : 'opacity-40'
              }`}
            >
              {/* Mountain chart placeholder */}
              <div className="w-32 h-20 mb-3 flex items-end justify-center">
                <svg
                  viewBox="0 0 100 50"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M0,40 L15,35 L25,38 L40,20 L50,30 L65,15 L75,25 L85,10 L100,20" />
                </svg>
              </div>
              <p className={`text-2xl font-light ${stat.active ? 'text-black' : 'text-slate-400'}`}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
          <span className="text-slate-600">→</span>
        </button>
      </div>
    </section>
  );
};

export default StatsCarousel;
