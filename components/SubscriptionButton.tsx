'use client'

import { Button } from "./ui/button"

interface SubscriptionButtonProps {
  isPro: boolean
}

const SubscriptionButton = ({ isPro= false }: SubscriptionButtonProps) => {
  return <Button size='sm' variant={isPro ? 'default' : 'premium'}>
    {isPro ? 'Manage Subscription' : 'Upgrade'}
    {!isPro? }
  </Button>
}

export default SubscriptionButton
