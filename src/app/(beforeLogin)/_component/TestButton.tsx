'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

const TestButton = async () => {
  const loginTest = async () => {
    const url = process.env.NODE_URL;

    const response = await fetch(`${url}/api/followingPosts`);

    if (!response.ok) return null;
    const user = await response.json();

    return user;
  };

  const onClick = () => {
    loginTest()
      .then((res) => {
        console.log('TestButton.tsx onClick', res);
      })
      .catch((err) => {
        console.error('TestButton.tsx onClick error', err);
      });
  };

  return (
    <Button onClick={onClick} variant={'outline'} size={'lg'} className="w-[300px] rounded-full">
      테스트
    </Button>
  );
};

export default TestButton;
