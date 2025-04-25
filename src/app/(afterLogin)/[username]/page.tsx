import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { UserRound } from 'lucide-react'
import Post from '../_component/Post'
import BackButton from '../_component/BackButton'

export default async function ProfilePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log('slug', slug)

  const me = {
    userId: 'rlagnswo0505',
    nickname: '훈제',
    image: '/5Udwvqim.jpg'
  }

  return (
    <main>
      <div className="flex items-center gap-4 p-3">
        <BackButton />
        <h3 className="text-lg font-bold">{me.nickname}</h3>
      </div>
      <div className="border-b p-3">
        <div className="flex items-center gap-4">
          <Avatar className="h-34 w-34 rounded-full">
            <AvatarImage
              src={me.image}
              alt="profile image"
            />
            <AvatarFallback>
              <UserRound className="h-20 w-20" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-bold">{me.nickname}</p>
            <p>@{me.userId}</p>
          </div>
          <Button
            className="rounded-full"
            variant={'outline'}>
            팔로우
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <p>0 팔로워</p>
          <p>0 팔로우 중</p>
        </div>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}
