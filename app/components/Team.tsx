'use client'

import Image from 'next/image'
import ScrollReveal from '@/app/components/ScrollReveal'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { TeamMember } from '@/app/types/team'

interface TeamProps {
  teamMembers: TeamMember[]
}

export default function Team({ teamMembers }: TeamProps) {
  if (!teamMembers || teamMembers.length === 0) return null

  const teamLead =
    teamMembers.find((member) => member.role?.toLowerCase().includes('ceo')) ||
    teamMembers[0]

  const restMembers = teamMembers.filter(
    (member) => member._id !== teamLead?._id,
  )

  return (
    <section className="bg-background text-foreground py-12 px-4 md:px-12 w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-4">
          <ScrollReveal variant="slideRight">
            <div className="space-y-4">
              <SectionHeader
                badge="OUR TEAM"
                title="Meet the Team Behind Your Success"
                centered={false}
              />
              <p className="font-sans text-muted text-sm md:text-base leading-relaxed">
                We&apos;re not just freelancers; we&apos;re a team of skilled
                specialists working together to help you launch successfully.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Grid Column */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
          {/* Main Lead Card */}
          <div
            className={
              restMembers.length > 0 ? 'sm:col-span-1' : 'sm:col-span-3'
            }
          >
            <ScrollReveal variant="scaleUp" delay={150} className="h-full">
              <div className="bg-card-bg/60 h-full border border-card-border rounded-3xl p-6 text-center flex flex-col justify-center items-center group transition-all hover:border-primary/50">
                <div className="w-32 h-32 rounded-full overflow-hidden relative mb-4 border-4 border-primary/20 group-hover:scale-105 transition-transform duration-300">
                  {teamLead?.imageUrl ? (
                    <Image
                      src={teamLead.imageUrl}
                      alt={teamLead.name}
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-card-border flex items-center justify-center text-xs text-muted">
                      No Photo
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-base text-foreground">
                  {teamLead?.name || 'Team Lead'}
                </h3>
                <p className="text-primary font-medium text-xs mt-1">
                  {teamLead?.role || 'CEO'}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Remaining Members */}
          {restMembers.length > 0 && (
            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {restMembers.map((member, idx) => (
                <ScrollReveal
                  key={member._id}
                  variant="slideUp"
                  delay={200 + idx * 100}
                  className="h-full"
                >
                  <div className="bg-card-bg/40 h-full border border-card-border rounded-2xl p-4 text-center flex flex-col items-center justify-center group transition-all hover:bg-card-bg/80 hover:border-primary/50">
                    <div className="w-24 h-24 rounded-full overflow-hidden relative mb-3 border-2 border-primary/10 group-hover:scale-105 transition-transform">
                      {member.imageUrl ? (
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full bg-card-border flex items-center justify-center text-xs text-muted">
                          No Photo
                        </div>
                      )}
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
          )}
        </div>
      </div>
    </section>
  )
}
