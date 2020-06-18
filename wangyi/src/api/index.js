//接口请求函数
import ajax from "./ajax";

export const reqIndexCateDate=()=>ajax.get('/getIndexCateList')
export const reqCateNavData=()=>ajax.get('/getCateGoryData')