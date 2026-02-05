import { useEffect, useState } from 'react';

const CVModal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle opening and closing animations
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure DOM is ready before animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      // Wait for closing animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'unset';
      }, 400); // Match the animation duration
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ahmed_Wael_CV.pdf';
    link.download = 'Ahmed_Wael_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating 
          ? 'bg-black/50 backdrop-blur-sm' 
          : 'bg-black/0 backdrop-blur-none'
      }`}
      style={{
        animation: isAnimating ? 'fadeIn 0.3s ease-out' : 'none'
      }}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transition-all duration-500 ease-out ${
          isAnimating 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{
          animation: isAnimating ? 'modalSlideIn 0.4s ease-out' : 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className={`transition-all duration-500 delay-100 ${
            isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <h2 className="text-2xl font-semibold text-slate-900">My Resume</h2>
            <p className="text-sm text-slate-500 mt-1">Ahmed Wael - Software Developer</p>
          </div>
          <div className={`flex items-center gap-2 transition-all duration-500 delay-150 ${
            isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </button>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className={`flex-1 overflow-auto p-6 transition-all duration-700 delay-200 ${
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-slate-100 rounded-xl overflow-hidden shadow-inner min-h-[600px]">
            <iframe
              src="/Ahmed_Wael_CV.pdf"
              className="w-full h-full min-h-[600px]"
              title="CV Preview"
            />
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 border-t border-slate-200 bg-slate-50 rounded-b-2xl transition-all duration-500 delay-300 ${
          isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xs text-slate-500 text-center">
            Press <kbd className="px-2 py-1 bg-white rounded border border-slate-300 text-slate-700">Esc</kbd> to close or click outside
          </p>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CVModal;
