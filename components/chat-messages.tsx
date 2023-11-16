import { Companion } from '@prisma/client'
import React from 'react'

interface ChatMessagesProps {
  isLoading: boolean
  companion: Companion
  messages: any[]
}
export const ChatMessages = ({
  isLoading,
  messages,
  companion,
}: ChatMessagesProps) => {
  return <div>ChatMessages</div>
}
