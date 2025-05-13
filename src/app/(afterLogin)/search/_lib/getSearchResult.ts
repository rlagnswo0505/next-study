import { Post } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';
import { MSW_URL } from '../../home/_lib/config';

export const getSearchResult: QueryFunction<
  Post[],
  [
    _1: string,
    _2: string,
    searchParams: {
      q: string;
      f?: string;
      pf?: string;
    }
  ]
> = async ({ querykey }) => {
  const [_1, _2, searchParams] = querykey;

  const res = await fetch(`${MSW_URL}/api/search/${searchParams.q}?${searchParams.toString()}`, {
    next: {
      tags: ['posts', 'search', searchParams.q],
      revalidate: 60, //캐시를 가지고 있는 시간 설정
    },
    // 캐쉬 사용하기 기본값은 no-store
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  console.log('!@#!#!@#@!#@!#!@#res', res);

  return res.json();
};
