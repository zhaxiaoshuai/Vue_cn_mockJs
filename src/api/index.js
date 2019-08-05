/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'


/**
 * 获取视频列表
 */
export const reqVideoList = () => ajax('/video')



