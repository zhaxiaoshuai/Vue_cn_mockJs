import {
  RECEIVE_VIDEOLIST
} from './mutation-types'
import {
  reqVideoList
} from  '../api'
export  default {
  async getAllVideo({commit}, callback) {
    const result = await reqVideoList()
    if (result.code === 0) {
      const allVideo = result.data
      commit(RECEIVE_VIDEOLIST, {allVideo})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  }
}
