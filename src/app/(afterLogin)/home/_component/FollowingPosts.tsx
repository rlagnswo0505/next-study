'use client';

import { useQuery } from '@tanstack/react-query';
import { getFollowingPosts } from '../_lib/getFollowingPosts';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';

export default function FollowingPosts() {
  const { data, error } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  if (error) {
    return console.log('error', error);
  }

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
