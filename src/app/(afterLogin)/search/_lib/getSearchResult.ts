import { Post } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';
import { NODE_URL } from '../../home/_lib/config';

export const getSearchResult: QueryFunction<Post[], [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }]> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const urlSearchParams = new URLSearchParams(searchParams);
  const res = await fetch(`${NODE_URL}/api/search?${urlSearchParams.toString()}`, {
    next: {
      tags: ['posts', 'search', searchParams.q],
    },
    cache: 'force-cache',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
