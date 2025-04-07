import React from 'react'
import BackButton from '../_component/BackButton'
import SearchForm from '../_component/SearchForm'
import Tabs from './_component/Tabs'
import Post from '../_component/Post'

type Props = {
  searchParams: { q: string; f?: string; pf?: string }
}
// const Search = async ({ searchParams }: Props) => {

const Search = ({ searchParams }: Props) => {
  return (
    <main className="flex flex-col items-stretch">
      <div className="fixed z-1 h-fit w-[598px]">
        <div className="flex items-center gap-4 border-b py-2 backdrop-blur-sm">
          <div>
            <BackButton />
          </div>
          <div className="flex w-[526px] items-center">
            <SearchForm />
          </div>
        </div>
        <Tabs />
      </div>
      <div className="mt-[108px]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default Search
