import ajax from "@/api/ajax"
import {CHANGEINDEXDATA} from '../mutation-types'
const state={
  indexData:{}
}
const mutations={
  [CHANGEINDEXDATA](state,indexDate){
    state.indexData=indexDate
  }
}
const actions={
  async getIndexData({commit}){
    let result=await ajax.get('/api/getIndexData')
    console.log(result)
    commit(CHANGEINDEXDATA,result)
  }
}
const getters={

}
export default{
  state,
  mutations,
  actions,
  getters
}
