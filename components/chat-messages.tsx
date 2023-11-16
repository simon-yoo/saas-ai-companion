'use client'

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
  return (
    <div className='flex-1 overflow-y-auto pr-4'>
      <ChatMessage />
    </div>
  )
}
