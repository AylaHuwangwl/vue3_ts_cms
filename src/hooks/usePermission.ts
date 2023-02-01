import userLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

function usePermission(permissionID: string) {
  const queryPermission = permissionID
  const permissions = localCache.getCache('permission')
  return !!permissions.find((item) => item.includes(queryPermission))
}
export default usePermission
