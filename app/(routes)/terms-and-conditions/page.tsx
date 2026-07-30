import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Rock & Safety Marketing Hub',
  description:
    'Read the terms and conditions governing the use of Rock & Safety Marketing Hub website and professional services.',
}

export default function TermsAndConditionsPage() {
  const lastUpdated = 'July 30, 2026'

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-foreground">
      {/* Header */}
      <div className="border-b border-card-border pb-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted">Last Updated: {lastUpdated}</p>
      </div>

      {/* Content */}
      <div className="space-y-8 leading-relaxed text-sm sm:text-base">
        {/* Introduction */}
        <section>
          <p>
            Welcome to <strong>Rock & Safety Marketing Hub</strong>{' '}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms
            and Conditions govern your access to and use of our website located
            at{' '}
            <a
              href="https://rockandsafety.com"
              className="text-primary hover:underline font-medium"
            >
              rockandsafety.com
            </a>{' '}
            and all associated professional marketing and safety solutions we
            provide. By accessing or using our platform, you agree to comply
            with and be bound by these terms.
          </p>
        </section>

        {/* 1. Use of Website */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            1. Use of Website and Services
          </h2>
          <p>
            You agree to use our website and services only for lawful purposes
            and in a way that does not infringe the rights of, restrict, or
            inhibit anyone else&apos;s use and enjoyment of the platform.
            Prohibited behavior includes harassing or causing distress to any
            other user, transmitting obscene or offensive content, or disrupting
            the normal flow of dialogue within our site.
          </p>
        </section>

        {/* 2. Intellectual Property */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            2. Intellectual Property Rights
          </h2>
          <p>
            Other than content you own, which you may have opted to include on
            this website, under these Terms, Rock &amp; Safety Marketing Hub
            and/or its licensors own all the intellectual property rights and
            materials contained in this website. You are granted a limited
            license only for purposes of viewing the material contained on this
            website.
          </p>
        </section>

        {/* 3. Newsletter & Communications */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            3. Subscriptions &amp; Communications
          </h2>
          <p>
            By subscribing to our newsletter or filling out our contact forms,
            you consent to receive periodic electronic communications, updates,
            and marketing materials from us. You retain the right to unsubscribe
            at any time by following the opt-out links provided in our emails or
            by contacting us directly.
          </p>
        </section>

        {/* 4. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Rock &amp; Safety Marketing Hub, nor any of its
            officers, directors, and employees, be held liable for anything
            arising out of or in any way connected with your use of this
            website. Rock &amp; Safety Marketing Hub shall not be held liable
            for any indirect, consequential, or special liability arising out of
            or related to your use of our services.
          </p>
        </section>

        {/* 5. Governing Law */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            5. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These terms will be governed by and interpreted in accordance with
            the laws of Nigeria, and you submit to the non-exclusive
            jurisdiction of the state and federal courts located in Nigeria for
            the resolution of any disputes.
          </p>
        </section>

        {/* 6. Changes to Terms */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to revise these terms at any time as we see
            fit. By using this website, you are expected to review these terms
            on a regular basis to ensure you understand all terms and conditions
            governing the use of this website.
          </p>
        </section>

        {/* 7. Contact Us */}
        <section className="border-t border-card-border pt-6 space-y-3">
          <h2 className="text-xl font-bold tracking-wide text-foreground">
            7. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us:
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
            href="/privacy-policy"
            className="inline-flex items-center text-sm font-semibold text-muted hover:text-primary transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  )
}
