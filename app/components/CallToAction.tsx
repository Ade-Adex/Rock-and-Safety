import Button from '@/app/components/ui/Button'
import SectionHeader from '@/app/components/ui/SectionHeader'
import WhatsAppButton from '@/app/components/WhatsAppButton'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-card-bg text-foreground py-12 px-4 sm:px-8 border-t border-gray-800 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="READY TO GROW YOUR BUSINESS?"
          title="Let’s Build Something Amazing Together!"
          className="mb-4!"
        />
        <p className="text-muted text-sm max-w-xl mx-auto mb-8">
          Partner with Rock and Safety Marketing Hub and let us help you build a
          powerful brand, attract more customers, and achieve measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#get-started">
            <Button variant="primary" className="w-full sm:w-auto">
              <span>GET STARTED TODAY →</span>
            </Button>
          </Link>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
