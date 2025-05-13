'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';
import { getSearchResult } from '../_lib/getSearchResult';

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

const SearchResult = ({ searchParams }: Props) => {
  const { data } = useQuery<IPost[], object, IPost[], [_1: string, _2: string, Props['searchParams']]>({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  console.log('SearchResult', data);

  if (!data) return <div>결과 없음...</div>;

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
};

export default SearchResult;
