'use client'

import { useState } from 'react'
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-28 pb-16 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-accent-gold">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
          We’d Love to Hear From You
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Have a question, feedback, or want to collaborate on a spotlight? Send
          us a message and our team will respond shortly.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Sidebar (4 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-foreground">
              Contact Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center shrink-0 mt-1">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                    Email Us
                  </h4>
                  <a
                    href="mailto:support@christbcogbomoso.org"
                    className="text-sm font-semibold text-foreground hover:text-accent-gold transition-colors"
                  >
                    support@christbcogbomoso.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center shrink-0 mt-1">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                    Location
                  </h4>
                  <p className="text-sm font-semibold text-foreground">
                    Ogbomoso, Oyo State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center shrink-0 mt-1">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                    Response Time
                  </h4>
                  <p className="text-sm font-semibold text-foreground">
                    Within 24 - 48 business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Area (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent-gold/10 text-accent-gold mx-auto flex items-center justify-center">
                  <FiCheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted text-sm max-w-md mx-auto">
                  Thank you for reaching out. We have received your message and
                  will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-extrabold uppercase tracking-wider text-accent-gold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="General Inquiry / Spotlight Request"
                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-secondary font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-md disabled:opacity-50 cursor-pointer"
                >
                  <FiSend className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
