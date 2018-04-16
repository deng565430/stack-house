import $api from './index'

export function getDataList (data) {
  data = Object.assign({
    start: 0,
    length: 10
  }, data)
  const url = '/slidingHouse/selectSlidingHouseInfo'

  return $api.post(url, data)
}
