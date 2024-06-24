import {WechatyBuilder} from 'wechaty'
const wechaty = WechatyBuilder.build()
import {network} from './network.js'
const answerMessage = () => {
  
        wechaty.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
        .on('login',            user => console.log(`User ${user} logged in`))
        .on('message', message => {
            // console.log(`message:${message}`)
            console.log('用户来源是',message.from().payload.name)
            if(message.from().payload.name === '讨厌冬天'){
                    message.say('奶茶鼠的肥胖不可避免')

                }
            
           
            else if(message.from().payload.name === '王大拿'){
                network(message.text()).then(msg => {
                    message.say(msg)

                })
                
            }

        })
    }

// wechaty
//   .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
//   .on('login',            user => console.log(`User ${user} logged in`))
//   .on('message',       message => {
//     console.log(`Message: ${message}`)

answerMessage()
wechaty.start()
