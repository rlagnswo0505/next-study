import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div
      className="
      w-dvw
      h-dvh
      flex
      flex-col
      justify-center
      "
    >
      <Card
        className="w-1/2 mx-auto
        p-4
        font-bold
      "
      >
        <h1
          className="
        text-6xl
        "
        >
          404
        </h1>
        <h2
          className="
        text-4xl"
        >
          Not Found
        </h2>
        <h4>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</h4>
        <Button asChild className="w-fit font-bold">
          <Link href={"/"}>홈으로</Link>
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
