'use client'

import { useState } from 'react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { TocItem } from '@/app/types/post'

interface PostBodyRendererProps {
  body: PortableTextBlock[]
  tableOfContents?: TocItem[]
}

export default function PostBodyRenderer({
  body,
  tableOfContents = [],
}: PostBodyRendererProps) {
  // 1. Default to the first Table of Contents item ID if available
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    () => (tableOfContents.length > 0 ? tableOfContents[0].id : null),
  )

  const handleSelectToc = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    setSelectedSectionId(id)
  }

  // 2. Find current TOC index and next item
  const currentIndex = tableOfContents.findIndex(
    (item) => item.id === selectedSectionId,
  )
  const hasNextSection =
    currentIndex !== -1 && currentIndex < tableOfContents.length - 1
  const nextSection = hasNextSection ? tableOfContents[currentIndex + 1] : null

  const handleNextSection = () => {
    if (nextSection) {
      setSelectedSectionId(nextSection.id)
    }
  }

  // Extract pure text from PortableText children
  const getBlockText = (block: PortableTextBlock): string => {
    if (!block.children || !Array.isArray(block.children)) return ''
    return block.children.map((child) => child.text || '').join('')
  }

  // Find the selected section block and subsequent content blocks until the next section heading
  const getActiveContentBlocks = () => {
    if (!selectedSectionId) return []

    const selectedIndex = body.findIndex(
      (block) => block._key === selectedSectionId,
    )
    if (selectedIndex === -1) return []

    const activeBlocks: PortableTextBlock[] = [body[selectedIndex]]

    // Collect paragraph/media blocks following the selected heading until another heading is encountered
    for (let i = selectedIndex + 1; i < body.length; i++) {
      const block = body[i]
      const style = 'style' in block ? (block.style as string) : ''
      if (['h1', 'h2', 'h3', 'h4'].includes(style)) break
      activeBlocks.push(block)
    }

    return activeBlocks
  }

  const activeBlocks = getActiveContentBlocks()

  const customComponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
          {children}
        </p>
      ),
    },
  }

  return (
    <div>
      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <div className="p-6 bg-card-bg rounded-2xl border border-card-border mb-8 shadow-sm">
          <h3 className="text-base font-bold text-foreground mb-4">
            Table of Contents
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-primary font-medium">
            {tableOfContents.map((item, idx) => {
              const isSelected = selectedSectionId === item.id
              return (
                <li key={item.id} className="truncate">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleSelectToc(e, item.id)}
                    className={`hover:underline transition-all ${
                      isSelected ? 'font-bold text-accent-gold underline' : ''
                    }`}
                  >
                    {idx + 1}. {item.text}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      )}

      {/* Selected Section Content */}
      {activeBlocks.length > 0 ? (
        <div className="p-6 bg-card-bg/40 border border-card-border rounded-2xl">
          <div className="space-y-4">
            {activeBlocks.map((block, index) => (
              <PortableText
                key={block._key || index}
                value={[block]}
                components={customComponents}
              />
            ))}
          </div>

          {/* Navigation Button to Next Section */}
          {hasNextSection && nextSection && (
            <button
              type="button"
              onClick={handleNextSection}
              className="mt-6 text-xs font-bold text-primary bg-card-bg border border-card-border px-4 py-2.5 rounded-xl hover:bg-primary hover:text-dark transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Next: {nextSection.text}</span>
              <span>→</span>
            </button>
          )}
        </div>
      ) : (
        <p className="text-xs text-muted italic">
          Select an item from the Table of Contents above to read its content.
        </p>
      )}
    </div>
  )
}
