import React from "react";
import SearchForm from "../_component/SearchForm";
import { Separator } from "@radix-ui/react-separator";

const page = () => {
  return <div className="w-[600px] flex flex-col items-stretch">
    <div className="w-[566px] mt-2 mb-10 px-4">
<SearchForm/>
    </div>
    <Separator className="my-2 border-t" />
    <div>
      <h4 className="p-3 text-2xl font-bold">나를 위한 트렌드</h4>
    </div>
  </div>;
};

export default page;
