import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rock & Safety Marketing Hub',
  description:
    'Learn how Rock & Safety Marketing Hub collects, uses, and protects your personal data and privacy.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'July 30, 2026'

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-foreground">
      {/* Header */}
      <div className="border-b border-card-border pb-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted">Last Updated: {lastUpdated}</p>
      </div>

      {/* Content */}
      <div className="space-y-8 leading-relaxed text-sm sm:text-base">
        {/* Introduction */}
        <section>
          <p>
            Welcome to <strong>Rock & Safety Marketing Hub</strong>{' '}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect
            your privacy and are deeply committed to safeguarding your personal
            data. This Privacy Policy outlines how we collect, use, disclose,
            and secure your information when you visit{' '}
            <a
              href="https://rockandsafety.com"
              className="text-primary hover:underline font-medium"
            >
              rockandsafety.com
            </a>{' '}
            or interact with our services.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information that you provide directly to us when
            registering interest, subscribing to newsletters, or requesting
            support.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted">
            <li>
              <strong className="text-foreground">Contact Details:</strong>{' '}
              Names, email addresses, phone numbers, and physical location
              queries.
            </li>
            <li>
              <strong className="text-foreground">
                Audience Subscriptions:
              </strong>{' '}
              Email addresses registered via our footer newsletter form.
            </li>
            <li>
              <strong className="text-foreground">Technical Log Data:</strong>{' '}
              Standard browser type, IP details, and web session analytics for
              security and performance optimization.
            </li>
          </ul>
        </section>

        {/* 2. How We Use Information */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            2. How We Use Your Information
          </h2>
          <p>
            We process your data exclusively for legitimate business and
            communication operations:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-muted">
            <li>
              Delivering targeted marketing newsletters, updates, and safety
              insights.
            </li>
            <li>
              Responding directly to inquiries and managing customer
              relationship workflows.
            </li>
            <li>
              Protecting our core web infrastructure against spam, abuse, and
              technical failures.
            </li>
          </ul>
        </section>

        {/* 3. Third-Party Data Handling */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            3. Third-Party Infrastructure
          </h2>
          <p>
            We partner with high-grade utility providers to run our operations
            safely. Specifically, we utilize <strong>Resend</strong> for
            programmatic outbound emails and audience collection. Your email
            address remains strictly bound within our private databases and is
            never distributed to third-party advertisers.
          </p>
        </section>

        {/* 4. Data Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            4. Security Measures
          </h2>
          <p>
            We utilize robust industry-standard encryption protocols and
            administrative safeguards to protect your privacy. However, no
            internet transmission is entirely foolproof, and absolute data
            safety cannot be inherently guaranteed.
          </p>
        </section>

        {/* 5. Your User Rights */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            5. Your Data Rights
          </h2>
          <p>
            You retain full authority to request data access, modifications, or
            complete removal from our records list. Unsubscribing from our
            mailing list can be processed automatically via direct contact or
            automated email links.
          </p>
        </section>

        {/* 6. Contact Us */}
        <section className="border-t border-card-border pt-6 space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            6. Contact Us
          </h2>
          <p>
            For privacy-related inquiries or policy clarifications, please get
            in touch:
          </p>
          <div className="bg-card-bg p-4 rounded-lg border border-card-border space-y-2 text-sm">
            <p className="font-semibold text-foreground">
              Rock &amp; Safety Marketing Hub
            </p>
            <p>
              📞{' '}
              <a
                href="tel:+2348152245314"
                className="hover:text-primary transition-colors"
              >
                +234 815 224 5314
              </a>
            </p>
            <p>
              ✉️{' '}
              <a
                href="mailto:info@rockandsafety.com"
                className="hover:text-primary transition-colors"
              >
                info@rockandsafety.com
              </a>
            </p>
            <p>📍 Nigeria</p>
          </div>
        </section>

        {/* Back Links */}
        <div className="pt-4 flex items-center space-x-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            ← Back to Home
          </Link>
          <Link
            href="/terms-and-conditions"
            className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors"
          >
            Terms &amp; Conditions →
          </Link>
        </div>
      </div>
    </main>
  )
}
