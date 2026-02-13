'use client'

import { useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'

interface ViewTrackerProps {
  postId: string
  slug: string
}

export function ViewTracker({ postId, slug }: ViewTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    const trackView = async () => {
      // Prevent double tracking
      if (hasTracked.current) return
      
      const supabase = createClient()
      
      // Check if already viewed in this session
      const viewedKey = `viewed_post_${slug}`
      const hasViewedInSession = sessionStorage.getItem(viewedKey)
      
      if (hasViewedInSession) {
        console.log('Already viewed in this session')
        return
      }

      try {
        // Call the RPC function
        const { error } = await supabase.rpc('increment_post_views', {
          post_id: postId
        })

        if (error) {
          console.error('Error tracking view:', error)
        } else {
          // Mark as viewed in this session
          sessionStorage.setItem(viewedKey, 'true')
          hasTracked.current = true
          console.log('View tracked successfully')
        }
      } catch (err) {
        console.error('Failed to track view:', err)
      }
    }

    // Small delay to ensure it's a real view (not a bot)
    const timer = setTimeout(() => {
      trackView()
    }, 1500)

    return () => clearTimeout(timer)
  }, [postId, slug])

  // This component renders nothing
  return null
}