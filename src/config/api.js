function getHost() {
  return window.location.host;
}
const root = '/jyweb/api/'
export const API_BASE_URL = 'https://' + getHost() + root // "外网"
// http://192.168.1.126:8080/jyweb/api/tcase/list?params=1
// export const API_BASE_URL = 'http://192.168.1.126:8080' + root; "内网"
// export const API_BASE_URL = 'http://112.74.172.5:8088/' + root // "外网"
// export const API_BASE_URL = '/test/jyweb/';
// export const API_BASE_URL = '/test' + root;
export const TOKEN_KEY = 'X-Nideshop-Token'
export const HISTORY_KEY = 'History-Key'
