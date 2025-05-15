import { NODE_URL } from './config';

export async function getPostRecommends() {
  console.log('추천 게시물', NODE_URL);

  const res = await fetch(`${NODE_URL}/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'],
    },
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
