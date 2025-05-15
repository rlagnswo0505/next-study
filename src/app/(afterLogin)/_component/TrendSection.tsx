'use client';

import { Card } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Post as IPost } from '@/model/Post';

const trends = [
  {
    id: 1,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234,
  },
  {
    id: 2,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234,
  },
  {
    id: 3,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234,
  },
];

type TrendProps = {
  id: number;
  title: string;
  nickname: string;
  postCount: number;
};

const Trend = (item: TrendProps) => {
  return (
    <Link href={'/search?q=트렌드'} className="hover:bg-muted-foreground/20 flex flex-col px-3">
      <div className="text-muted-foreground">{item.title}</div>
      <div className="text-foreground text-lg font-bold">{item.nickname}</div>
      <div className="text-muted-foreground">{item.postCount?.toLocaleString() ?? 0} posts</div>
    </Link>
  );
};

const TrendSection = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['trends'],
    queryFn: () => {},
    staleTime: 1000 * 60,
    gcTime: 300 * 1000,
  });

  const segment = useSelectedLayoutSegment();
  const { data: session } = useSession();

  if (segment === 'explore') return null;

  if (segment === 'search')
    return (
      <Card className="bg-muted-foreground/10 py-3 shadow-none">
        <h2 className="px-3 text-2xl font-bold">나를 위한 트렌드</h2>
      </Card>
    );

  if (session?.user) {
    return (
      <Card className="bg-muted-foreground/10 mt-2 py-3 shadow-none">
        <h2 className="px-3 text-2xl font-bold">나를 위한 트렌드</h2>
        <div className="flex flex-col gap-2">
          {trends?.map((item) => (
            <Trend key={item.id} {...item} />
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-muted-foreground/10 mt-2 py-3 shadow-none">
      <h2 className="px-3">트렌드를 가져올 수 없습니다.</h2>
    </Card>
  );
};

export default TrendSection;
