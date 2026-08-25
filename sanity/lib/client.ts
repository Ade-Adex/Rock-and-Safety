import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

/**
 * Wraps `client.fetch` with error handling so that build-time / prerender
 * failures (e.g. dataset not yet available) don't crash the build.
 * Returns `undefined` on error; callers can provide a fallback default.
 */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  options?: { next?: { revalidate?: number } },
): Promise<T | undefined> {
  try {
    return await client.fetch<T>(query, params, options)
  } catch (error) {
    console.warn('[sanity] Fetch failed, returning undefined:', error)
    return undefined
  }
}
