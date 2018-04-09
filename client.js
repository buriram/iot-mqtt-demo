const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1883')

let led = 0
let timer

client.on('connect', function () {
  clearInterval(timer)
  timer = setInterval(() => {
    console.log('R=' + led)
    client.publish('iot-cmd', 'R=' + led)
    led = (led + 1) % 2
  }, 2000)
  client.subscribe('sensor/sombat')
  client.subscribe('sensor/Oak')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  // console.log('topic=', topic)
  if (topic === 'sensor/sombat') {
    console.log(topic, message.toString('utf-8'))
  }
})