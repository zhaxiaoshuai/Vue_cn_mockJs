export default {
  zhaoshangVideoArr(state){
    return state.allVideo.filter(item => {
      return  item.type === 'teaching'
    })
  }
}
