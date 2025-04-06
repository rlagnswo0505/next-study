'use client'

import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import SearchForm from './SearchForm'

const RightSearchZone = () => {
  const segment = useSelectedLayoutSegment()

  if (segment === 'explore' || segment === 'search')
    return (
      <div className="mt-2">
        <Card className="gap-2 p-3 shadow-none">
          <h2 className="text-foreground text-lg font-bold">검색필터</h2>
        </Card>
        <Card className="mt-2 gap-2 p-3 shadow-none">
          <h4 className="text-foreground font-bold">사용자</h4>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="r1"
                className="cursor-pointer">
                모든 사용자
              </Label>
              <RadioGroupItem
                value="comfortable"
                id="r1"
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="r2"
                className="cursor-pointer">
                내가 팔로우하는 사람들
              </Label>
              <RadioGroupItem
                value="compact"
                id="r2"
              />
            </div>
          </RadioGroup>
          <h4 className="text-foreground mt-4 font-bold">위치</h4>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="r3"
                className="cursor-pointer">
                어디에서나
              </Label>
              <RadioGroupItem
                value="comfortable"
                id="r3"
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="r4"
                className="cursor-pointer">
                현 위치 주변
              </Label>
              <RadioGroupItem
                value="compact"
                id="r4"
              />
            </div>
          </RadioGroup>
        </Card>
      </div>
    )

  return (
    <div className="mt-2 mb-12 w-[inherit]">
      <SearchForm />
    </div>
  )
}

export default RightSearchZone
