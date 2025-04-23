'use client'

import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { signIn } from 'next-auth/react'

const formSchema = z.object({
  userId: z
    .string({
      required_error: '아이디는 필수입니다.',
      invalid_type_error: '아이디는 문자열이어야 합니다.'
    })
    .min(2, {
      message: '아이디는 최소 2자 이상이어야 합니다.'
    })
    .max(20, {
      message: '아이디는 최대 20자 이하여야 합니다.'
    }),
  password: z
    .string({
      required_error: '비밀번호는 필수입니다.',
      invalid_type_error: '비밀번호는 문자열이어야 합니다.'
    })
    .min(6, {
      message: '비밀번호는 최소 6자 이상이어야 합니다.'
    })
    .max(20, {
      message: '비밀번호는 최대 20자 이하여야 합니다.'
    })
})

const LoginModal = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: '',
      password: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log('data', data)
    try {
      await signIn('credentials', {
        username: data.userId,
        password: data.password,
        redirect: false
      })
      router.replace('/home')
    } catch (err) {
      console.error('Login failed', err)
      form.setError('userId', {
        type: 'manual',
        message: '아이디 또는 비밀번호가 잘못되었습니다.'
      })
      form.setError('password', {
        type: 'manual',
        message: '아이디 또는 비밀번호가 잘못되었습니다.'
      })
    }
  }

  return (
    <Dialog
      defaultOpen={true}
      onOpenChange={open => {
        if (!open) {
          router.back()
        }
      }}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>로그인하세요.</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">아이디</FormLabel>
                    <FormControl className="md:text-base">
                      <Input
                        placeholder="아이디"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">비밀번호</FormLabel>
                    <FormControl className="md:text-base">
                      <Input
                        placeholder="비밀번호"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">로그인하기</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
