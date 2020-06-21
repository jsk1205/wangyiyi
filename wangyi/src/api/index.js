//接口请求函数
import ajax from "./ajax";
import qs from 'qs'
export const reqIndexCateDate=()=>ajax.get('/api/getIndexCateList')
export const reqCateNavData=()=>ajax.get('/api/getCateGoryData')
export const reqSearchInput=()=>ajax.post('/host/xhr/search/init.json')
export const reqSearch=(keyword)=>ajax.post('/host/xhr/search/searchAutoComplete.json',qs.stringify({keywordPrefix:keyword}))
export const reqWorthyNav=()=>ajax.get('/host/topic/v1/know/navWap.json')
//瀑布流
export const reqWorthManual=()=>ajax.get('/host/topic/v1/find/recManual.json')
// 触底加载
export const reqWorthAuto=()=>ajax.get('/host/topic/v1/find/recAuto.json')