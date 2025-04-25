'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Session } from '@auth/core/types'
import { UserCircle } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {
  me: Session | null
}

const LogoutButton = ({ me }: Props) => {
  const router = useRouter()

  const handleLogout = () => {
    signOut({
      redirect: false
    }).then(() => {
      router.replace('/')
    })
  }

  if (!me?.user) {
    return null
  }

  return (
    <Button
      variant={'ghost'}
      size={'lg'}
      className="my-3 gap-4 rounded-full py-7"
      onClick={handleLogout}>
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={me.user?.image as string}
          alt={me.user?.email as string}
        />
        <AvatarFallback>
          <UserCircle className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
      <div className="hidden w-full flex-col items-start xl:flex">
        <h4 className="font-bold">{me.user?.name}</h4>
        <span>@{me.user?.email}</span>
      </div>
    </Button>
  )
}

export default LogoutButton
