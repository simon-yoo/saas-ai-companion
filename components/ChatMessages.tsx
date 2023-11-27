'use client'

import { Companion } from '@prisma/client'
import React, { ElementRef, useEffect, useRef, useState } from 'react'
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
  // scrolls down message when new message pops up
  const scrollRef = useRef<ElementRef<'div'>>(null)

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
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          role={message.role}
          content={message.content}
          src={message.src}
        />
      ))}
      {isLoading && <ChatMessage role='system' src={companion.src} isLoading />}
      <div ref={scrollRef} />
    </div>
  )
}
