import React from 'react'
import BackButton from '../_component/BackButton'
import SearchForm from '../_component/SearchForm'
import Tabs from './_component/Tabs'
import SearchResult from './_component/SearchResult'

type Props = {
  searchParams: { q: string; f?: string; pf?: string }
}
// const Search = async ({ searchParams }: Props) => {

const Search = async ({ searchParams }: Props) => {
  const query = await searchParams

  return (
    <main className="flex flex-col items-stretch">
      <div className="fixed z-1 h-fit w-[598px]">
        <div className="flex items-center gap-4 border-b py-2 backdrop-blur-sm">
          <div>
            <BackButton />
          </div>
          <div className="flex w-[526px] items-center">
            <SearchForm
              q={query.q}
              pf={query?.pf}
              f={query?.f}
            />
          </div>
        </div>
        <Tabs />
      </div>
      <div className="mt-[108px]">
        <SearchResult searchParams={query} />
      </div>
    </main>
  )
}

export default Search
