import { Button } from '@/components/ui/button'
import zLogo from '@/../public/zlogo.png'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <Image
          src={zLogo}
          alt="Zwitter"
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-4 font-bold">
        <h2 className="text-6xl">지금 일어나고 있는 일</h2>
        <h3>지금 가입하세요.</h3>
        <Button
          className="w-[300px] rounded-full"
          size={'lg'}
          asChild>
          <Link href={'/i/flow/signup'}>계정 만들기</Link>
        </Button>
        <h4>이미 트위터에 가입하셨나요?</h4>
        <Button
          variant={'outline'}
          size={'lg'}
          className="w-[300px] rounded-full"
          asChild>
          <Link href={'/login'}>로그인</Link>
        </Button>
      </div>
    </>
  )
}

export default Main
