'use server'
import { z } from 'zod'

import { redirect } from 'next/navigation'
// import { signIn } from '@/auth'

const formSchema = z.object({
  userId: z
    .string({
      required_error: '아이디는 필수입니다.',
      invalid_type_error: '아이디는 문자열이어야 합니다.'
    })
    .trim()
    .min(2, {
      message: '아이디는 최소 2자 이상이어야 합니다.'
    })
    .max(20, {
      message: '아이디는 최대 20자 이하여야 합니다.'
    }),
  nickName: z
    .string({
      required_error: '닉네임은 필수입니다.',
      invalid_type_error: '닉네임은 문자열이어야 합니다.'
    })
    .trim()
    .min(2, {
      message: '닉네임은 최소 2자 이상이어야 합니다.'
    })
    .max(20, {
      message: '닉네임은 최대 20자 이하여야 합니다.'
    }),
  password: z
    .string({
      required_error: '비밀번호는 필수입니다.',
      invalid_type_error: '비밀번호는 문자열이어야 합니다.'
    })
    .min(2, {
      message: '비밀번호는 최소 2자 이상이어야 합니다.'
    })
    .max(20, {
      message: '비밀번호는 최대 20자 이하여야 합니다.'
    }),
  image: z
    .any({
      required_error: '프로필 사진은 필수입니다.',
      invalid_type_error: '프로필 사진은 파일이어야 합니다.'
    })
    .refine(file => !!file, {
      message: '프로필 사진은 필수입니다.'
    })
    .refine(file => file.size <= 5 * 1024 * 1024, {
      message: '파일 크기는 5MB 이하로 제한됩니다.'
    })
    .refine(
      file => {
        return (
          file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif'
        )
      },
      {
        message: '지원하지 않는 파일 형식입니다.'
      }
    )
})

export type FormValues = z.infer<typeof formSchema>

export const submitForm = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  const inputData = {
    userId: formData.get('userId') as string,
    nickName: formData.get('nickName') as string,
    password: formData.get('password') as string,
    image: formData.get('image') as File | null
  }

  const input = formSchema.safeParse(inputData)
  if (!input.success) {
    console.log(input.error.format())
    const { fieldErrors } = input.error.flatten()
    return {
      message: 'invalid_input',
      fieldErrors,
      data: inputData
    }
  }

  let shouldRedirect = false
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        credentials: 'include'
      }
    )
    console.log(response.status)
    if (response.status === 403) {
      return {
        message: 'user_exists',
        data: inputData
      }
    }
    console.log(await response.json())
    shouldRedirect = true
    // await signIn('credentials', {
    //   username: formData.get('id'),
    //   password: formData.get('password'),
    //   redirect: false
    // })
  } catch (err) {
    console.error(err)
    return {
      message: null,
      data: inputData
    }
  }

  if (shouldRedirect) {
    redirect('/home') // try/catch문 안에서 X
  }
  return {
    message: null,
    data: inputData
  }
}
