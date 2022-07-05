import axios from 'axios'

export const fetchData1 = (cb) => {
  axios.get('https://www.fastmock.site/mock/31450493ed987ee4de2e058fe4a35578/api/user-data')
  .then(cb)
}

export const fetchData2 = () => {
  return axios.get('https://www.fastmock.site/mock/31450493ed987ee4de2e058fe4a35578/api/user-data')
}
