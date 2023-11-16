'use client'

import { ChatRequestOptions } from 'ai'
import { ChangeEvent, FormEvent } from 'react'
import { Input } from '@/components/ui/input'

interface ChatFormProps {
  isLoading: boolean
  input: string
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOPtions?: ChatRequestOptions | undefined
  ) => void
}
const ChatForm = ({
  isLoading,
  input,
  handleInputChange,
  onSubmit,
}: ChatFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className='border-t border-primary/10 py-4 flex items-center gap-x-2'
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder='Type a message'
        className='rounded-lg bg-primary/10'
      />
    </form>
  )
}

export default ChatForm
