import config from '../config'

const { request } = config

export const getOS = async ()=> await request({ url: '/os' })