const StatsCarousel = () => {
  const stats = [
    { value: '+4,881 m', label: 'aluminium bait fishing', active: false },
    { value: '+4,423 m', label: 'aluminium bait fishing', active: true },
    { value: '+3,910 m', label: 'aluminium bait fishing', active: false },
  ];

  return (
    <section className="px-8 py-6 -mt-32 relative z-10">
      <div className="flex items-end justify-start gap-6 ml-4">
        {/* Left Arrow */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors mb-8">
          <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </button>

        {/* Stats Cards */}
        <div className="flex items-end gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all ${
                stat.active ? 'opacity-100' : 'opacity-30'
              }`}
            >
              {/* Mountain chart */}
              <div className={`w-36 h-24 mb-4 flex items-end justify-center ${stat.active ? 'bg-white rounded-2xl shadow-sm p-4' : ''}`}>
                <svg
                  viewBox="0 0 120 60"
                  className="w-full h-full"
                  fill="none"
                >
                  {stat.active ? (
                    <>
                      {/* Filled mountain for active */}
                      <path 
                        d="M0,55 L20,45 L35,50 L50,25 L65,40 L80,20 L95,35 L110,15 L120,30 L120,60 L0,60 Z" 
                        fill="currentColor" 
                        className="text-slate-200"
                      />
                      <path 
                        d="M0,55 L20,45 L35,50 L50,25 L65,40 L80,20 L95,35 L110,15 L120,30" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-slate-800"
                      />
                    </>
                  ) : (
                    <path 
                      d="M0,50 L15,42 L25,46 L40,30 L55,38 L70,22 L85,32 L100,18 L115,28" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      className="text-slate-400"
                    />
                  )}
                </svg>
              </div>
              <p className={`text-3xl font-light tracking-tight ${stat.active ? 'text-black' : 'text-slate-400'}`}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors mb-8 ml-4">
          <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default StatsCarousel;
