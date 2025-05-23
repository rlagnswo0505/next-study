import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import React from 'react';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';
import { Post as IPost } from '@/model/Post';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  post: IPost;
  noImage?: boolean;
};

const Post = ({ post, noImage }: Props) => {
  // if (Math.random() > 0.5 && !noImage) {
  //   post.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() })
  // }

  //0개에서 4개까지 랜덤으로 넣기
  if (Math.random() > 0.5 && !noImage) {
    post.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
    post.Images.push({ imageId: 2, link: faker.image.urlLoremFlickr() });
    post.Images.push({ imageId: 3, link: faker.image.urlLoremFlickr() });
    post.Images.push({ imageId: 3, link: faker.image.urlLoremFlickr() });
  }

  return (
    <PostArticle post={post}>
      <Link href={`/${post.User?.userId}`} className="relative h-10 w-10">
        <Avatar className="h-10 w-10 overflow-hidden rounded-full">
          <AvatarImage src={post.User?.profileImage} alt={post.User?.nickname} className="object-cover" />
          <AvatarFallback>
            <User className="text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="absolute top-0 left-0 h-10 w-10 rounded-full opacity-20 hover:bg-black" />
      </Link>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <Link href={`/${post.User.userId}`} className="flex items-center gap-1">
            <p className="font-bold hover:underline">{post.User.nickname}</p>
            <div>@{post.User.userId}</div>
          </Link>
          &nbsp; • &nbsp;
          <div className="text-muted-foreground hover:underline">{dayjs(post.createdAt).fromNow(true)}</div>
        </div>
        <div
          // wrapping text pre
          className="text-sm break-words whitespace-pre-wrap"
        >
          {post.content}
        </div>
        <div>
          <PostImages post={post} />
        </div>
        <ActionButtons />
      </div>
    </PostArticle>
  );
};

export default Post;
