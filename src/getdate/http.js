// 引入axios模块
const axios = require('axios');

const $http = axios.create({
    baseURL: 'https://cnodejs.org/api/v1/',
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
  });

// 请求主题数据
function getItemDate(opticons){

  // 默认查询的参数
  var newOpticons = Object.assign({
        limit:40,
  },opticons);

   console.log(opticons);
  return $http({
    url: '/topics',
    method: 'get', 
    params: newOpticons,
  });

}

// 请求主题内容详情数据
function getArticleDate(id){
   return $http.get('/topic/'+id);
}

// 暴露获取数据方法
export {getItemDate,getArticleDate} 

