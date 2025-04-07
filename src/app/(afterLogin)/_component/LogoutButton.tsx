import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const LogoutButton = () => {
  return (
    <Button
      variant={'ghost'}
      size={'lg'}
      className="my-3 gap-4 rounded-full py-7">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/102115202?v=4"
          alt="프로필"
        />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="hidden w-full flex-col items-start xl:flex">
        <h4 className="font-bold">김재훈</h4>
        <span>@hoonjae</span>
      </div>
    </Button>
  )
}

export default LogoutButton
