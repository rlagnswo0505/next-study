'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const BackButton = () => {
  return (
    <Button
      size={'icon'}
      variant={'ghost'}
      className="rounded-full [&_svg:not([class*='size-'])]:size-6">
      <ArrowLeft />
    </Button>
  )
}

export default BackButton
