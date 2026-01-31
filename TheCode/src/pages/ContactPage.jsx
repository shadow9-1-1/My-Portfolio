import ContactSection from '../components/ContactSection'

const ContactPage = () => {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Get In Touch
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Additional Contact Info */}
      <div className="px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Location</h3>
            <p className="text-slate-600">Cairo, Egypt</p>
            <p className="text-slate-500 text-sm">Available for remote work</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
            <p className="text-slate-600">ahmedoficial22@gmail.com</p>
            <p className="text-slate-500 text-sm">Response within 24 hours</p>
          </div>

          {/* Availability Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Availability</h3>
            <p className="text-slate-600">Sun - Thu, 9AM - 6PM</p>
            <p className="text-slate-500 text-sm">Cairo Time (EET)</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">What services do you offer?</h3>
            <p className="text-slate-600 text-sm">I specialize in full-stack web development, UI/UX design, and creating responsive, modern web applications.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">What is your typical project timeline?</h3>
            <p className="text-slate-600 text-sm">Project timelines vary based on scope. A typical website takes 2-4 weeks, while larger applications may take 2-3 months.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">Do you work with remote clients?</h3>
            <p className="text-slate-600 text-sm">Absolutely! I work with clients worldwide and use modern collaboration tools to ensure smooth communication.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-2">How do we get started?</h3>
            <p className="text-slate-600 text-sm">Simply fill out the contact form or send me an email. I'll get back to you within 24 hours to discuss your project.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
