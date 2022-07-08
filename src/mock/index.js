import axios from 'axios'

export const runtimeCallback = (fn) => {
  fn && fn()
}

export const fetchData = () => {
  return axios.get('https://www.fastmock.site/mock/31450493ed987ee4de2e058fe4a35578/api/user-data')
  .then(resp => resp.data)
}
