// eslint-disable-next-line
/* eslint-disable */
import { PREFX_STORAGE, API_TOKEN } from './configs/configs'
import TimeStorage from 'time-storage'

window.myStorage = TimeStorage( PREFX_STORAGE, 6, 'hour')

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['x-backend-token']  = API_TOKEN