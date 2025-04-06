import React from 'react'
import SearchForm from '../_component/SearchForm'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

const trends = [
  {
    id: 1,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234
  },
  {
    id: 2,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234
  },
  {
    id: 3,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234
  },
  {
    id: 4,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234
  },
  {
    id: 5,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234
  },
  {
    id: 6,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234
  }
]

const Explore = () => {
  return (
    <div className="flex w-[600px] flex-col items-stretch">
      <div className="mt-2 mb-10 w-[566px] px-4">
        <SearchForm />
      </div>
      <Separator className="my-2 border-t" />
      <div>
        <h4 className="p-3 text-2xl font-bold">나를 위한 트렌드</h4>
        <div>
          <div className="flex flex-col gap-2">
            {trends?.map(item => (
              <Link
                href={'/search?q=트렌드'}
                className="hover:bg-muted-foreground/20 flex flex-col px-3"
                key={item.id}>
                <div className="text-muted-foreground">{item.title}</div>
                <div className="text-foreground text-lg font-bold">
                  {item.nickname}
                </div>
                <div className="text-muted-foreground">
                  {item.postCount?.toLocaleString() ?? 0} posts
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
