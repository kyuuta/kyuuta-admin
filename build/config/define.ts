import { format } from 'date-fns'

const PROJECT_BUILD_TIME = JSON.stringify(
  format(new Date(), 'yyyy-MM-dd HH:mm:ss')
)

export const viteDefine = {
  PROJECT_BUILD_TIME
}
