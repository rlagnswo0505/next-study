'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchForm = () => {
  const router = useRouter()
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const value = e.currentTarget.search.value
    router.push(`/search?q=${value}`)
  }
  return (
    <form
      onSubmit={onSubmit}
      className="fixed w-[inherit]">
      <div className="bg-muted-foreground/10 flex items-center justify-start rounded-full">
        <Search className="text-muted-foreground absolute top-2 left-2 transform" />
        <Input
          className="rounded-full pl-10"
          name="search"
        />
      </div>
    </form>
  )
}

export default SearchForm
