const FullWidthHero = () => {
  return (
    <section className="px-6 py-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 min-h-[500px]">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/10" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-white/5" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-xs uppercase tracking-wide mb-6">
              Featured Collection
            </span>

            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              The art of
              <br />
              <span className="font-semibold">timeless elegance</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-md mb-8">
              Discover our curated collection of premium essentials designed for
              the modern explorer. Each piece tells a story of craftsmanship and
              adventure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
                Shop Collection
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: '150+', label: 'Products' },
              { value: '50K', label: 'Happy Customers' },
              { value: '25', label: 'Countries' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl md:text-3xl font-light text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-2xl max-w-[200px] hidden md:block">
          <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 mb-3" />
          <h4 className="font-medium text-sm">Premium Jacket</h4>
          <p className="text-xs text-slate-500">$299.00</p>
        </div>
      </div>
    </section>
  );
};

export default FullWidthHero;
