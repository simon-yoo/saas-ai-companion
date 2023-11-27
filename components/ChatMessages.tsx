'use client'

import { Companion } from '@prisma/client'
import React, { useEffect, useState } from 'react'
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
  const [fakeLoading, setFakeLoading] = useState(
    messages.length === 0 ? true : false
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className='flex-1 overflow-y-auto pr-4'>
      <ChatMessage
        isLoading={fakeLoading}
        src={companion.src}
        role='system'
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
    </div>
  )
}
