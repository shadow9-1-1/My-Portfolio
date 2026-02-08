const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The quality exceeded my expectations. Every detail is carefully crafted.",
      author: "Sarah Chen",
      role: "Adventure Photographer",
      avatar: "SC",
    },
    {
      quote: "Perfect blend of style and functionality. My go-to brand for expeditions.",
      author: "Marcus Rivera",
      role: "Mountain Guide",
      avatar: "MR",
    },
    {
      quote: "Sustainable fashion that doesn't compromise on design. Absolutely love it.",
      author: "Emma Thompson",
      role: "Travel Blogger",
      avatar: "ET",
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-light mt-2 dark:text-white">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">"{testimonial.quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-300">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-medium text-sm dark:text-white">{testimonial.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
