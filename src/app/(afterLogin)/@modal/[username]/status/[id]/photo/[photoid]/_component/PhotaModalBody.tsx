'use client'

import { Dialog } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const PhotaModalBody = ({ children }: Props) => {
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

export default PhotaModalBody
