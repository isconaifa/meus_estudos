const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const Gyokeres = new Character('Gyokeres');
Gyokeres.on('help', () => console.log( `Eu,  ${Gyokeres.name} o matador! `))
console.log('Oh! E agora, quem poderá me defender?')
Gyokeres.emit('help')