import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <Button
    variant={"ghost"}
    size={"lg"}
    className="my-3 rounded-full py-7 gap-4
    cursor-pointer"
  >
    <Avatar className="w-10 h-10">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/102115202?v=4"
        alt="프로필"
      />
      <AvatarFallback></AvatarFallback>
    </Avatar>
    <div className="w-full flex flex-col
      items-start
    ">
      <h4 className="font-bold">김재훈</h4>
      <span>@hoonjae</span>
    </div>
  </Button>
  );
};

export default LogoutButton;