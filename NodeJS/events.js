const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('SaySomething', () => {
    console.log('Eu estou apaixonado')
})

ev.emit('SaySomething')
ev.emit('SaySomething')