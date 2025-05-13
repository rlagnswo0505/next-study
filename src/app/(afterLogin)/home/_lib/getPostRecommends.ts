import { MSW_URL } from './config';

export async function getPostRecommends() {
  const res = await fetch(`${MSW_URL}/api/getPostRecommends`, {
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
