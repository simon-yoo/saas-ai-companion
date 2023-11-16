'use client'

import { Companion, Message } from '@prisma/client'

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[]
    _count: {
      messages: number
    }
  }
}
const ChatHeader = ({ companion }: ChatHeaderProps) => {
  return <div>chat-header</div>
}

export default ChatHeader
