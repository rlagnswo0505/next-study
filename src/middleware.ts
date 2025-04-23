export { auth as middleware } from './auth'

// 로그인을 해야만 접근할 수 있는 페이지를 설정합니다.
export const config = {
  matcher: ['/compost/tweet', '/home', '/explore', '/messages', '/search']
}
