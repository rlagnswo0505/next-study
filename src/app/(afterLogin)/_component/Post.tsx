import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import React from 'react';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import ActionButtons from './ActionButtons';


dayjs.locale('ko');
dayjs.extend(relativeTime)

const post = {
  User: {
    userId: 'rlagnswo0505',
    nickname: '훈제',
    profileImage: 'https://avatars.githubusercontent.com/u/102115202?v=4',
  },
  content: `안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!
안녕

하이
  `,
  createdAt: new Date(),
  Images:[]
}

const Post = () => {


  return (
    <article className='flex items-start gap-2 p-3 border-b border-b-slate-200 cursor-pointer duration-200 hover:bg-muted-foreground/20' >
      <Link href={`/${post.User.userId}`}
        className='relative w-10 h-10 '
      >
  <Avatar className='w-10 h-10 overflow-hidden rounded-full'>
          <AvatarImage src={post.User.profileImage} alt={post.User.nickname}
          className='object-cover'
          />
        <AvatarFallback>
          <User className='text-muted-foreground' />
        </AvatarFallback>
        </Avatar>
        <div
          className='absolute w-10 h-10 top-0 left-0 hover:bg-black opacity-20 rounded-full'
        />
      </Link>
      <div className='flex flex-col gap-1 w-full'>

      <div className='flex items-center '>
      <Link href={ `/${post.User.userId}`} className='flex items-center gap-1' >
        <p className='font-bold hover:underline'>
          {post.User.nickname}
        </p>
        <div>
          @{post.User.userId}
          </div>
          </Link>
        &nbsp;
          • 
          &nbsp;
        <div className='hover:underline text-muted-foreground'>
          { dayjs(post.createdAt).fromNow(true)}
        </div>
      </div>
        <div
          // wrapping text pre
          className='whitespace-pre-wrap break-words text-sm'
        >
        {post.content}
      </div>
      <ActionButtons />
      </div>
    </article>
  );
};

export default Post;