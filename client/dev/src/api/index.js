import config from '../config'

const { request } = config

export const getOS = async ()=> await request({ url: '/os' })

export const checkPath = async pwd=> await request({
  url: `/os/path`,
  data: {
    type: `check`,
    pwd
  }
})

export const checkPort = async port=> await request({
  url: `/os/port`,
  data: {
    type: `check`,
    port
  }
})