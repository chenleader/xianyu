import axios  from "axios";

export  function request(config){
  const instance=axios.create({
      baseURL:'http://localhost:8888',
      timeout:5000
})

//拦截器,拦截下来需要再返回，可以自己再配置一些东西，比如token，自己再往配置中添加。再去发送请求
instance.interceptors.request.use(config=>{console.log(config); return config},err=>{console.log(err)})
instance.interceptors.response.use(res=>{
  return res;  
},err=>{
  console.log(err)
})
return instance(config)
}
