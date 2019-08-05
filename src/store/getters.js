export default {
  zhaoshangVideoArr(state){
    return state.allVideo.filter(item => item.type === 'teaching')
  }
}
