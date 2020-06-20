//接口请求函数
import ajax from "./ajax";

export const reqIndexCateDate=()=>ajax.get('/api/getIndexCateList')
export const reqCateNavData=()=>ajax.get('/api/getCateGoryData')
export const reqSearchInput=()=>ajax.post('/host/xhr/search/init.json')