'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  q: string
  pf?: string
  f?: string
}

const SearchForm = ({ q, pf, f }: Props) => {
  const router = useRouter()
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const value = e.currentTarget.q.value
    router.push(
      `/search?q=${value}${pf ? `&pf=${pf}` : ''}${f ? `&f=${f}` : ''}`
    )
  }
  return (
    <form
      onSubmit={onSubmit}
      className="fixed w-[inherit]">
      <div className="bg-muted-foreground/10 flex items-center justify-start rounded-full">
        <Search className="text-muted-foreground absolute top-2 left-2 transform" />
        <Input
          className="rounded-full pl-10"
          name="q"
          defaultValue={q}
        />
        <Input
          className="rounded-full pl-10"
          name="pf"
          type="hidden"
          defaultValue={pf}
        />
        <Input
          className="rounded-full pl-10"
          name="f"
          type="hidden"
          defaultValue={f}
        />
      </div>
    </form>
  )
}

export default SearchForm
