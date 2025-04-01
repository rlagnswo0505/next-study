import { Card } from '@/components/ui/card';
import Link from 'next/link';

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
  {
    id: 4,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234,
  },
  {
    id: 5,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234,
  },
  {
    id: 6,
    title: '실시간 트렌드',
    nickname: '훈제',
    postCount: 1234,
  },
]


const Trend = (item) => {
  
  return (
    <Link href={'/search?q=트렌드'} className='hover:bg-muted-foreground/20 flex flex-col px-3'>
      <div className='text-muted-foreground'>{item.title}</div>
      <div className='text-foreground font-bold text-lg'>
        {item.nickname}
      </div>
      <div className='text-muted-foreground'>
        {item.postCount?.toLocaleString()?? 0} posts
      </div>
    </Link>
  )
}

const TrendSection = () => {
  return (
            <Card className="py-3 bg-muted-foreground/10 shadow-none">
              <h2 className="
              text-2xl font-bold px-3
              ">나를 위한 트렌드</h2>
              <div className="flex flex-col gap-2 ">
                {trends.map((item) => (
                  <Trend key={item.id} {...item} />
                ))}
              </div>
            </Card>
  );
};

export default TrendSection;