'use client'

import { Companion } from '@prisma/client'
import React from 'react'
import { ChatMessage, ChatMessageProps } from '@/components/ChatMessage'

interface ChatMessagesProps {
  isLoading: boolean
  companion: Companion
  messages: ChatMessageProps[]
}
export const ChatMessages = ({
  isLoading,
  messages = [],
  companion,
}: ChatMessagesProps) => {
  return (
    <div className='flex-1 overflow-y-auto pr-4'>
      <ChatMessage
        isLoading={isLoading}
        src={companion.src}
        role='system'
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
      <ChatMessage
        isLoading={isLoading}
        role='user'
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
    </div>
  )
}
