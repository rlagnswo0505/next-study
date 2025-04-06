import React from "react";
import TabProvider from "./_component/TabProvider";
import Tab from "./_component/Tab";
import PostForm from "../_component/PostForm";
import { Separator } from '@/components/ui/separator';
import Post from "../_component/Post";

const Home = () => {
  return <div className="flex flex-col w-[600px] items-stretch">
    <TabProvider>
      <Tab />
      <div
        className="mt-[104px]"
      />
      <PostForm />
      <Separator />
      <div className="flex flex-col">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </TabProvider>
  </div>;
};

export default Home;
