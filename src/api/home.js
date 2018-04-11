import $api from './index'

export function getDataList () {
  const url = '/sendmsg/start'

  return $api.get(url)
}
