import { Button } from "@/components/ui/button";
import zLogo from "../../../public/zlogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
      w-dvw
      h-dvh
      flex
    "
    >
      <div
        className="w-full flex
      justify-center
      items-center
      "
      >
        <Image src={zLogo} alt="Zwitter" />
      </div>
      <div
        className="w-full 
        flex
        flex-col
        justify-center
        gap-4
        font-bold
      "
      >
        <h2 className="text-6xl ">지금 일어나고 있는 일</h2>
        <h3>지금 가입하세요.</h3>
        <Button
          className="
          rounded-full
          w-[300px]
          "
          size={"lg"}
          asChild
        >
          <Link href={"/i/flow/signup"}>계정 만들기</Link>
        </Button>
        <h4>이미 트위터에 가입하셨나요?</h4>
        <Button
          variant={"outline"}
          size={"lg"}
          className="w-[300px]
          rounded-full
        "
        >
          로그인
        </Button>
      </div>
    </div>
  );
}
