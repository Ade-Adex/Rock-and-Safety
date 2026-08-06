import Image from 'next/image'
import { PostAuthor } from '@/app/types/post'

interface AuthorBioProps {
  author?: string | PostAuthor
}

export default function BlogAuthorBio({ author }: AuthorBioProps) {
  // Normalize author to object format if passed as a string
  const authorData = typeof author === 'string' ? { name: author } : author

  return (
    <div className="p-6 bg-card-bg rounded-2xl border border-card-border flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12">
      {authorData?.imageUrl ? (
        <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0 border border-card-border">
          <Image
            src={authorData.imageUrl}
            alt={authorData.name || 'Author'}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-dark border border-card-border flex items-center justify-center text-xl font-bold text-primary shrink-0">
          {authorData?.name ? authorData.name.charAt(0) : 'R'}
        </div>
      )}
      <div className="text-center sm:text-left">
        <h4 className="font-bold text-foreground text-base">
          {authorData?.name || 'Rock and Safety Marketing Hub'}
        </h4>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          {authorData?.bio ||
            'We help businesses grow online with result-driven websites, Facebook ads, and digital marketing strategies that deliver real results.'}
        </p>
      </div>
    </div>
  )
}
