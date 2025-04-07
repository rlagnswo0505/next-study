'use client'

import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import ProfileImg from '@/../public/5Udwvqim.jpg'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  content: z.string().min(4)
})

const CommentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: ''
    }
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('data', data)
  }

  return (
    <div className="p-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-start gap-2">
            <Image
              src={ProfileImg}
              alt="프로필"
              width={40}
              height={40}
              className="object-contain"
            />

            <div className="grid w-full gap-4">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="md:text-base">
                      <Textarea
                        placeholder="답글 게시하기"
                        {...field}
                        className="h-fit"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full items-center justify-between">
                <Button
                  type="button"
                  className="rounded-full [&_svg:not([class*='size-'])]:size-5"
                  size={'icon'}
                  variant={'ghost'}
                  asChild>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      multiple
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-image-icon lucide-image">
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="3"
                        rx="2"
                        ry="2"
                      />
                      <circle
                        cx="9"
                        cy="9"
                        r="2"
                      />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </label>
                </Button>
                <Button
                  type="submit"
                  className="rounded-full"
                  disabled={!form.formState.isValid}>
                  게시하기
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default CommentForm
