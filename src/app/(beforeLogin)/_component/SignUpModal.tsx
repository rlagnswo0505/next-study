'use client'

import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import React, { useActionState, useEffect, useRef } from 'react'
import ModalBody from './ModalBody'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { submitForm } from '../_lib/signup'
import { Label } from '@/components/ui/label'

const SignUpModal = () => {
  const [state, formAction] = useActionState(submitForm, {
    message: null,
    data: {
      userId: '',
      nickName: '',
      password: '',
      image: null
    }
  })
  const { pending } = useFormStatus()

  const imageRef = useRef(null)

  console.log('state', state)

  return (
    <ModalBody>
      <DialogContent>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>계정을 생성하세요.</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label
                htmlFor="userId"
                className="text-base">
                아이디
              </Label>
              <Input
                placeholder="아이디"
                name="userId"
                defaultValue={state?.data?.userId}
              />
              {state?.fieldErrors?.userId && (
                <p className="text-destructive text-sm">
                  {state?.fieldErrors?.userId[0]}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="nickName"
                className="text-base">
                닉네임
              </Label>
              <Input
                placeholder="닉네임"
                name="nickName"
                defaultValue={state?.data?.nickName}
              />
              {state?.fieldErrors?.nickName && (
                <p className="text-destructive text-sm">
                  {state?.fieldErrors?.nickName[0]}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="password"
                className="text-base">
                비밀번호
              </Label>
              <Input
                placeholder="비밀번호"
                name="password"
                type="password"
                defaultValue={state?.data?.password}
              />
              {state?.fieldErrors?.password && (
                <p className="text-destructive text-sm">
                  {state?.fieldErrors?.password[0]}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="image"
                className="text-base">
                프로필
              </Label>
              <Input
                placeholder="프로필 사진"
                type="file"
                accept="image/*"
                multiple={false}
                name="image"
                ref={imageRef}
              />
              {state?.fieldErrors?.image && (
                <p className="text-destructive text-sm">
                  {state?.fieldErrors?.image[0]}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <div className="flex w-full flex-col items-end justify-center gap-2">
              <Button
                type="submit"
                disabled={pending}>
                {pending && <Loader2 className="animate-spin" />}
                가입하기
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </ModalBody>
  )
}

export default SignUpModal
