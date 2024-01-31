/**
 * @description: 请求结果集
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = -1,
  LOGINEXPIRED = 401,
  TIMEOUT = 10042,
  TYPE = 'success'
}

/**
 * @description: 请求方法
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

/**
 * @description:  常用的contentTyp类型
 */
export enum ContentTypeEnum {
  JSON = 'application/json;charset=UTF-8',
  TEXT = 'text/plain;charset=UTF-8',
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
