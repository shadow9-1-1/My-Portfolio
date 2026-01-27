import SocialIcons from './SocialIcons';
import { BlurText, BlurFade, SlideIn, ScaleIn, MotionBlur } from './Animations';

const ContactSection = () => {
  const contactMethods = [
    {
      title: 'Email',
      value: 'hello@johndoe.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:hello@johndoe.com',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+15551234567',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: '#',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <section id="contact" className="px-6 py-16">
      <div className="grid grid-cols-12 gap-8">
        {/* Left - Contact Form */}
        <SlideIn direction="left" delay={0} duration={0.6} className="col-span-12 lg:col-span-7">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10">
            <BlurFade delay={0.1}>
              <span className="text-xs text-slate-400 uppercase tracking-wide">Get in Touch</span>
            </BlurFade>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-2 mb-2">
              <BlurText text="Let's work together" delay={40} />
            </h2>
            <BlurFade delay={0.2}>
              <p className="text-slate-400 text-sm mb-8">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
              </p>
            </BlurFade>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-slate-900 py-4 rounded-2xl font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </SlideIn>

        {/* Right - Contact Info */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* Contact Methods */}
          {contactMethods.map((method, idx) => (
            <ScaleIn key={idx} delay={0.1 * idx} duration={0.5}>
              <a
                href={method.link}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${method.bgColor} flex items-center justify-center ${method.iconColor}`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">{method.title}</p>
                  <p className="font-medium text-slate-900 group-hover:text-slate-600 transition-colors">
                    {method.value}
                  </p>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </ScaleIn>
          ))}

          {/* Social Card */}
          <BlurFade delay={0.3} duration={0.6}>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Follow Me</h3>
              <p className="text-white/80 text-sm mb-4">
                Connect with me on social media for updates and insights.
              </p>
              <SocialIcons className="[&_a]:bg-white/20 [&_a]:hover:bg-white/30 [&_a]:text-white" />
            </div>
          </BlurFade>

          {/* Availability Card */}
          <BlurFade delay={0.4} duration={0.6}>
            <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-medium">Available for work</span>
              </div>
              <p className="text-slate-600 text-sm">
                I'm currently open to freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
