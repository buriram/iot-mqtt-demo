const axios = require('axios')
const qs = require('qs')
let token = ''
axios({
  method: 'post',
  headers: {
    'Authorization': 'Bearer ' + token,
    'content-type': 'application/x-www-form-urlencoded',
  },
  url: 'https://notify-api.line.me/api/notify',
  data: qs.stringify({
    message: 'ทดสอบภาษาไทย OK',
  }),
}).then(() => {
  console.log('noti ok')
}).catch((e) => {
  console.log('noti failed', e)
})

