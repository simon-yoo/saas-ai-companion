'use client'

import { Sparkle } from 'lucide-react'
import { Button } from './ui/button'

interface SubscriptionButtonProps {
  isPro: boolean
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  return (
    <Button size='sm' variant={isPro ? 'default' : 'premium'}>
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Sparkle className='h-4 w-4 ml-2 fill-white' />}
    </Button>
  )
}

export default SubscriptionButton
