import React from "react";
import NavMenu from "./_component/NavMenu";

import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowSection from "./_component/FollowSection";
import RightSearchZone from "./_component/RightSearchZone";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className="flex items-stretch ">
      <header className="flex flex-col items-end grow-1">
        <section className="h-dvh w-[72px] xl:w-[275px]">
          <div className="flex flex-col justify-between h-dvh px-2 w-[inherit] fixed ">
            <ul className="flex flex-col gap-2 flex-1">
              <NavMenu/>
            </ul>
           <LogoutButton/>
          </div>
        </section>
      </header>
      <div className="flex items-start flex-col grow-1 ">
        <div className="flex w-[990px] justify-between">
          <main className="w-[600px]
          border-x-1 
          ">
            <section className="h-[200dvh] w-full">
            {children}
            </section>
          </main>
          <section className="w-[350px]
          flex flex-col
          ">
            <RightSearchZone/>
            <TrendSection/>
            <FollowSection/>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
