export const getPostRecommends = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ['posts', 'recommends'],
        revalidate: 60 //캐시를 가지고 있는 시간 설정
      },
      // 캐쉬 사용하기 기본값은 no-store
      cache: 'force-cache'
    }
  )
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}
