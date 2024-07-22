import path from 'path'

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

/**
 * 获取项目src路径
 * @param srcName - src目录名称(默认: "src")
 * @descrition 末尾不带斜杠
 */
export function getSrcPath(srcName = 'src') {
  const rootPath = getRootPath()

  return `${rootPath}/${srcName}`
}

/** 处理环境变量文件的返回内容 */
export function wrapperEnv(
  envConfig: Common.Recordable
): ImportMetaEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConfig)) {
    let realName = envConfig[envName].replace(/\\n/g, '\n')

    realName =
      realName === 'true'
        ? true
        : realName === 'false'
        ? false
        : realName

    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {}
    }

    ret[envName] = realName
    process.env[envName] = realName
  }

  return ret
}
