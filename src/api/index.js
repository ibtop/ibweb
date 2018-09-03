import axios from 'axios'
//API列表
let apiList = {
  //用户管理	:10310
  "user": [
    '/banner/listByType', //公告列表
    '/notice/list', //公告列表
    '/trade/getTradeInfoByZone',
  ],
  //管理 :10320
  "coin": [
    '/coin/info/all', //GET 查询全部币种列表
  ],
  //支付管理 :13030
  "payment": [],

  //交易管理 :10340
  "trade": [
    '/trade/getTopTradeCoinPairs', //GET 主要币种模块展示  
    '/trade/getTradeInfoByZone', //交易区列表(根据交易区ID查询)
    '/trade/getKDatas', //启用获取k线  GET
  ],
}

// API接口处理 
// method string  'GET' or 'POST'
// parmas object

let api = {}
for (let i in apiList) {
	let reqName = i.toUpperCase()
  let item = apiList[i]
  for (let s in item) {
    let name = item[s].split('/').pop()
    let url = `/${reqName}${item[s]}`
    console.log(url)
    api[name] = (params, method) => {
      let ajax = method || 'GET' ? axios.get(url, {params:params}) : axios.post(url, {params:params})
      return ajax
    }
  }
}
console.log(api)
export default api