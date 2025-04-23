'use client'

import { Dialog } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import React from 'react'

type ModalBodyProps = {
  children: React.ReactNode
}

const ModalBody = ({ children }: ModalBodyProps) => {
  const router = useRouter()

  return (
    <Dialog
      defaultOpen={true}
      onOpenChange={open => {
        if (!open) {
          router.back()
        }
      }}>
      {children}
    </Dialog>
  )
}

export default ModalBody
