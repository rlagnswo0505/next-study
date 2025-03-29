"use client";

import { Button } from "@/components/ui/button";
import { House, Mail, PencilLine, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import zLogo from "@/../public/zlogo.png";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex items-stretch ">
      <header className="flex flex-col items-end grow-1">
        <section className="h-dvh w-[72px] xl:w-[275px]">
          <div className="flex flex-col justify-between h-dvh px-2 w-[inherit] fixed ">
            <ul className="flex flex-col gap-2 flex-1">
              <li>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="rounded-full w-14 h-14"
                  asChild
                >
                  <Link href="/home">
                    <Image src={zLogo} alt="zLogo" width={40} height={40} />
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className={
                    "[&_span]:hidden xl:[&_span]:block rounded-full text-2xl [&_svg:not([class*='size-'])]:size-6 p-7"
                  }
                  asChild
                >
                  <Link href="/home">
                    <House strokeWidth={segment === "home" ? "3" : "2"} />
                    <span
                      className={
                        segment === "home" ? "font-bold" : "font-normal"
                      }
                    >
                      홈
                    </span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className="rounded-full text-2xl [&_svg:not([class*='size-'])]:size-6 [&_span]:hidden
                  xl:[&_span]:block p-7"
                  asChild
                >
                  <Link href="/explore">
                    <Search
                      strokeWidth={segment === "explore" ? "3" : "2"}
                      size={100}
                    />
                    <span
                      className={
                        segment === "explore" ? "font-bold" : "font-normal"
                      }
                    >
                      탐색하기
                    </span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className="rounded-full text-2xl [&_svg:not([class*='size-'])]:size-6 [&_span]:hidden
                  xl:[&_span]:block p-7"
                  asChild
                >
                  <Link href="/messages">
                    <Mail strokeWidth={segment === "messages" ? "3" : "2"} />
                    <span
                      className={
                        segment === "messages" ? "font-bold" : "font-normal"
                      }
                    >
                      쪽지
                    </span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  size={"lg"}
                  className="rounded-full w-full text-xl [&_svg:not([class*='size-'])]:size-6
                  [&_span]:hidden xl:[&_span]:block 
                  p-7"
                  asChild
                >
                  <Link href="/compose/tweet">
                    <PencilLine size={20} className="block xl:hidden" />
                    <span className="font-bold">
                    게시하기
                    </span>
                  </Link>
                </Button>
              </li>
            </ul>
            <Button
              // variant={"ghost"}
              size={"lg"}
              className="my-3 rounded-full"
            ></Button>
          </div>
        </section>
      </header>
      <div className="flex items-start flex-col grow-1">
        <div className="flex">
          <main className="w-[600px] bg-red-300">{children}</main>
          <section className="w-[350px] bg-blue-300"></section>
        </div>
      </div>
      {modal}
    </div>
  );
}
