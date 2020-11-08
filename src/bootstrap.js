import TimeStorage from 'time-storage'

window.myStorage = TimeStorage( process.env.PREFX_STORAGE, 6, 'hour')

window.axios = require('axios')
window._ = require('underscore')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['x-backend-token']  = process.env.API_TOKEN
