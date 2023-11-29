'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { usePropModal } from '@/hooks/use-pro-modal'

export const ProModal = () => {
  const proModal = usePropModal()

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className='space-y-4'>
          <DialogTitle className='text-center'>Upgrade to Pro</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
