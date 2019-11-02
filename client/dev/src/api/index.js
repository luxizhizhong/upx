import config from '../config'
const { request } = config

export const get_os = async ()=> await request({ url: '/os' })

export const check_path = async pwd=> await request({
  url: `/os/path`,
  data: {
    type: `check`,
    pwd
  }
})

export const check_port = async port=> await request({
  url: `/os/port`,
  data: {
    type: `check`,
    port
  }
})

export const os_kill_port = async port=> await request({
  url: `/server/kill/${ port }`
})

export const os_run_server = async conf=> await request({
  url: `/server/run/${ conf.port }`,
  data: {
    path: conf.path
  }
})

export const add_http_server = async conf=> await request({
  url: '/store/http/add',
  data: conf
})

export const change_http_server = async conf=> await request({
  url: '/store/http/change',
  data: conf
})

export const get_http_server_all = async ()=> await request({
  url: '/store/http/get/all'
})

export const get_http_server = async id=> await request({
  url: `/store/http/get/${ id }`
})

export const remove_http_server_all = async ()=> await request({
  url: '/store/http/remove/all'
})

export const remove_http_server = async id=> await request({
  url: `/store/http/remove/${ id }`
})