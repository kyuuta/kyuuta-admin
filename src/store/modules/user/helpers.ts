import { localStorage } from '@/utils'

/** 获取缓存token */
export function getToken() {
  return localStorage.get('token') || ''
}

/** 清除用户缓存 */
export function clearUserStorage() {
  localStorage.remove('token')
}