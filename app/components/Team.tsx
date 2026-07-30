'use client'

import Image from 'next/image'
import { teamMembers } from '@/app/data/teams'
import ScrollReveal from '@/app/components/ScrollReveal'
import SectionHeader from '@/app/components/ui/SectionHeader'

export default function Team() {
  const teamLead = teamMembers.find((member) => member.role.includes('CEO'))

  return (
    <section className="bg-background text-foreground py-12 px-4 md:px-12 w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-4">
          <ScrollReveal variant="slideRight">
            <div className="space-y-4">
              <SectionHeader
                badge="OUR TEAM"
                title=" Meet the Team Behind Your Success"
                centered={false}
                badgeClassName=""
                titleClassName="text-xl md:text-3xl!"
                className="mb-5!"
              />
              <p className="font-sans text-muted text-sm md:text-base leading-relaxed">
                We&apos;re not just freelancers; we&apos;re a team of skilled
                specialists working together to help you launch successfully.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side Layout Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
          {/* Main CEO Feature Card */}
          <div className="sm:col-span-1">
            <ScrollReveal variant="scaleUp" delay={150} className="h-full">
              <div className="bg-card-bg/60 h-full border border-card-border rounded-3xl p-2 text-center flex flex-col justify-center items-center group transition-all hover:border-primary/50">
                <div className="w-42 h-42 rounded-full overflow-hidden relative mb-6 border-4 border-primary/20 group-hover:scale-105 transition-transform duration-300">
                  {teamLead?.img && (
                    <Image
                      src={teamLead.img}
                      alt={teamLead.name || 'Team Lead'}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>
                <h3 className="font-bold text-base text-foreground">
                  {teamLead?.name || 'Position Open'}
                </h3>
                <p className="text-primary font-medium text-xs mt-1">
                  {teamLead?.role || 'CEO'}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Sub Specialists */}
          <div className="sm:col-span-2 grid grid-cols-2 gap-4">
            {teamMembers.slice(1).map((member, idx) => (
              <ScrollReveal
                key={idx}
                variant="slideUp"
                delay={200 + idx * 100}
                className="h-full"
              >
                <div className="bg-card-bg/40 h-full border border-card-border rounded-2xl p-4 text-center flex flex-col items-center justify-center group transition-all hover:bg-card-bg/80 hover:border-primary/50">
                  <div className="w-24 h-24 rounded-full overflow-hidden relative mb-3 border-2 border-primary/10 group-hover:scale-105 transition-transform">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-foreground leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-primary text-[11px] font-medium mt-1 uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
