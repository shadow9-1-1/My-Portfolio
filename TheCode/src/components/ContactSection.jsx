import { useState } from 'react';
import SocialIcons from './SocialIcons';
import { BlurText, BlurFade, SlideIn, ScaleIn, MotionBlur } from './Animations';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your WhatsApp number (without + or spaces)
    const phoneNumber = '201020313770';
    
    // Format the message
    const message = `*New Contact Form Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      title: 'Email',
      value: 'ahmedoficial22@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:ahmedoficial22@gmail.com',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Phone',
      value: '+20 102 031 3770',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+201020313770',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Location',
      value: 'Cairo, Egypt',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: 'https://www.google.com/maps/place/Cairo,+Egypt',
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    required
                    className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is it about?"
                  required
                  className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what's on your mind..."
                  required
                  className="w-full bg-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-medium hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
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
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${method.bgColor} flex items-center justify-center ${method.iconColor} transition-transform duration-300 group-hover:scale-110`}>
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
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-violet-500/25 hover:scale-[1.02] hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white mb-2">Follow Me</h3>
              <p className="text-white/80 text-sm mb-4">
                Connect with me on social media for updates.
              </p>
              <SocialIcons className="[&_a]:bg-white/20 [&_a]:hover:bg-white/30 [&_a]:text-white" />
            </div>
          </BlurFade>

          {/* Availability Card */}
          <BlurFade delay={0.4} duration={0.6}>
            <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 hover:border-emerald-200">
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
