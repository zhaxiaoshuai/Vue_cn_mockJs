// 使用mockjs提供mock数据接口
import Mock from 'mockjs'
import data from './data.json'

// 返回视频列表接口
Mock.mock('/video', {code:0, data: data.allVideo})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可


