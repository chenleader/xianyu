import {request} from './request'

export function requestGet(url,params) {
  return request({
    url,
    method:'get',
    params:params
})
}
export function requestPost(url,params) {

  return request({
    url,
    method:'post',
    data:params
})
}
