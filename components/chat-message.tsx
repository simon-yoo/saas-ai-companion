import React from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useTheme } from 'next-themes'
export interface ChatMessageProps {
  role: 'system' | 'user'
  content?: string
  isLoading: boolean
  src?: string
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  src,
}: ChatMessageProps) => {
  const { toast } = useToast()
  const { theme } = useTheme()

  const onCopu = () => {
    if (!content) {
      return
    }

    navigator.clipboard.writeText(content)
    toast({
      description: 'Messages copied to clipboard',
    })
  }
  return <div>ChatMessage</div>
}
