'use client'

import { ChatRequestOptions } from 'ai'
import { ChangeEvent, FormEvent } from 'react'

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
  return <div>chat-form</div>
}

export default ChatForm
