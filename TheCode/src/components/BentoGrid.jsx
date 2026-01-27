import { BlurText, BlurFade, ScaleIn } from './Animations';

const BentoGrid = () => {
  const categories = [
    {
      title: 'Adventure',
      subtitle: 'Explore the unknown',
      size: 'large',
      bgColor: 'bg-gradient-to-br from-slate-800 to-slate-900',
      textColor: 'text-white',
    },
    {
      title: 'Mountain',
      subtitle: 'Peak experiences',
      size: 'medium',
      bgColor: 'bg-gradient-to-br from-amber-100 to-amber-200',
      textColor: 'text-slate-800',
    },
    {
      title: 'Ocean',
      subtitle: 'Deep dive',
      size: 'medium',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      textColor: 'text-slate-800',
    },
    {
      title: 'Forest',
      subtitle: 'Into the wild',
      size: 'small',
      bgColor: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
      textColor: 'text-slate-800',
    },
    {
      title: 'Desert',
      subtitle: 'Golden horizons',
      size: 'small',
      bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
      textColor: 'text-slate-800',
    },
    {
      title: 'Arctic',
      subtitle: 'Frozen beauty',
      size: 'wide',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-slate-100',
      textColor: 'text-slate-800',
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-12 md:col-span-6 row-span-2';
      case 'medium':
        return 'col-span-12 md:col-span-6 lg:col-span-3 row-span-1';
      case 'small':
        return 'col-span-6 md:col-span-3 row-span-1';
      case 'wide':
        return 'col-span-12 md:col-span-6 row-span-1';
      default:
        return 'col-span-6 row-span-1';
    }
  };

  return (
    <section className="px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-light mb-2">
          <BlurText text="Explore Categories" delay={30} />
        </h2>
        <BlurFade delay={0.2}>
          <p className="text-slate-500 text-sm">Discover your next adventure</p>
        </BlurFade>
      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
        {categories.map((category, idx) => (
          <ScaleIn
            key={idx}
            delay={0.05 * idx}
            duration={0.5}
            className={getSizeClasses(category.size)}
          >
            <div
              className={`${category.bgColor} rounded-3xl p-6 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] h-full`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-current" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-current" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className={`text-xs ${category.textColor} opacity-60 uppercase tracking-wide`}>
                    Category
                  </span>
                </div>

                <div>
                  <h3 className={`text-2xl font-semibold ${category.textColor} mb-1`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm ${category.textColor} opacity-70`}>
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={category.textColor}>→</span>
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
