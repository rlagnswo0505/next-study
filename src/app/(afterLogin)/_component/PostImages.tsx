import React from 'react'
import Link from 'next/link'

type Props = {
  post: {
    postId: number
    User: {
      userId: string
      nickname: string
      profileImage: string
    }
    Images: any[]
    content: string
  }
}

const PostImages = ({ post }: Props) => {
  if (!post.Images) return null
  if (!post.Images.length) return null
  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={`inline-block h-full max-h-[510px] w-full overflow-hidden rounded-lg bg-[${post.Images[0].link}] bg-contain bg-no-repeat`}>
        <img
          src={post.Images[0].link}
          className="max-h-[510px] w-full"
        />
      </Link>
    )
  }
  //2개일때 0번째는 라운드 왼쪽만 1번째는 라운드 오른쪽만
  if (post.Images.length === 2) {
    return (
      <div className="flex items-center justify-center gap-1">
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={`flex h-[272px] w-full flex-1 overflow-hidden rounded-l-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[0].link})` }}>
          <img
            src={post.Images[0].link}
            className="h-full w-full object-cover"
          />
        </Link>
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          className={`flex h-[272px] w-full flex-1 overflow-hidden rounded-r-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[1].link})` }}>
          <img
            src={post.Images[1].link}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    )
  }
  //3개일때 0번째는 라운드 왼쪽만 1번째는 라운드 오른쪽위만 2번째는 라운드 오른쪽 아래만
  if (post.Images.length === 3) {
    return (
      <div className="flex gap-1">
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={`flex h-[272px] w-full flex-1 overflow-hidden rounded-l-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[0].link})` }}>
          <img
            src={post.Images[0].link}
            className="h-full w-full object-cover"
          />
        </Link>
        <div className="flex h-[272px] flex-1 flex-col gap-1">
          <Link
            href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            className={`flex h-full w-full flex-1 overflow-hidden rounded-tr-lg bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${post.Images[1].link})` }}>
            <img
              src={post.Images[1].link}
              className="h-full w-full object-cover"
            />
          </Link>
          <Link
            href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            className={`flex h-full w-full flex-1 overflow-hidden rounded-br-lg bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${post.Images[2].link})` }}>
            <img
              src={post.Images[2].link}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    )
  }
  //4개 이상일때 4개만 보여주고 나머지는 생략
  if (post.Images.length === 4) {
    return (
      <div className="grid h-[272px] grid-cols-2 grid-rows-2 gap-1">
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={`flex h-full w-full overflow-hidden rounded-tl-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[0].link})` }}>
          <img
            src={post.Images[0].link}
            className="h-full w-full object-cover"
          />
        </Link>
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          className={`flex h-full w-full overflow-hidden rounded-tr-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[1].link})` }}>
          <img
            src={post.Images[1].link}
            className="h-full w-full object-cover"
          />
        </Link>
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          className={`flex h-full w-full overflow-hidden rounded-bl-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[2].link})` }}>
          <img
            src={post.Images[2].link}
            className="h-full w-full object-cover"
          />
        </Link>
        <Link
          href={`/${post.User.userId}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          className={`flex h-full w-full overflow-hidden rounded-br-lg bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${post.Images[3].link})` }}>
          <img
            src={post.Images[3].link}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    )
  }

  return null
}

export default PostImages
