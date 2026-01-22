const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-slate-400 animate-scroll-dot" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
