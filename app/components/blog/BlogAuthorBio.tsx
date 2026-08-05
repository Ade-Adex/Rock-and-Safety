import Image from 'next/image'

interface AuthorBioProps {
  author?: {
    name?: string
    imageUrl?: string
    bio?: string
  }
}

export default function BlogAuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="p-6 bg-card-bg rounded-2xl border border-card-border flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12">
      {author?.imageUrl ? (
        <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0 border border-card-border">
          <Image
            src={author.imageUrl}
            alt={author.name || 'Author'}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-dark border border-card-border flex items-center justify-center text-xl font-bold text-primary shrink-0">
          {author?.name ? author.name.charAt(0) : 'R'}
        </div>
      )}
      <div className="text-center sm:text-left">
        <h4 className="font-bold text-foreground text-base">
          {author?.name || 'Rock and Safety Marketing Hub'}
        </h4>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          {author?.bio ||
            'We help businesses grow online with result-driven websites, Facebook ads, and digital marketing strategies that deliver real results.'}
        </p>
      </div>
    </div>
  )
}
