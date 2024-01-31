import { isArray, isString } from 'lodash-es'

export function usePermissions() {
  const { getPermissions } = useRouteStore()

  function everyPermissions(accesses: string | string[]) {
    if (isArray(accesses)) {
      return accesses.every((item) => {
        return getPermissions.includes(item)
      })
    }

    if (isString(accesses)) {
      return getPermissions.includes(accesses)
    }
  }

  function hasPermission(
    accesses: string | string[]
  ): boolean {
    return everyPermissions(accesses)
  }

  return {
    hasPermission
  }
}
