'use client'

import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
import SearchForm from './SearchForm';

const RightSearchZone = () => {
  const segment = useSelectedLayoutSegment();

  if (segment === 'explore' || segment === 'search') return (
    <div className='mt-2'>
      <Card className='p-3 shadow-none gap-2'>
        <h2 className='text-foreground font-bold text-lg'>
        검색필터
        </h2>
      </Card>
      <Card className='p-3 mt-2 shadow-none gap-2'>
        <h4 className='text-foreground font-bold'>사용자</h4>
        <RadioGroup defaultValue="comfortable">
          <div className="flex justify-between items-center space-x-2">
            <Label htmlFor="r1">모든 사용자</Label>
            <RadioGroupItem value="comfortable" id="r1" />
          </div>
          <div className="flex justify-between items-center space-x-2">
            <Label htmlFor="r2">내가 팔로우하는 사람들</Label>
            <RadioGroupItem value="compact" id="r2" />
          </div>
        </RadioGroup>
        <h4 className='text-foreground font-bold mt-4'>위치</h4>
        <RadioGroup defaultValue="comfortable">
          <div className="flex justify-between items-center space-x-2">
            <Label htmlFor="r3">어디에서나</Label>
            <RadioGroupItem value="comfortable" id="r3" />
          </div>
          <div className="flex justify-between items-center space-x-2">
            <Label htmlFor="r4">현 위치 주변</Label>
            <RadioGroupItem value="compact" id="r4" />
          </div>
        </RadioGroup>
      </Card>
    </div>
  )

  return (
    <div className="w-[inherit] mb-12 mt-2">
<SearchForm/>
</div>
  );
};

export default RightSearchZone;