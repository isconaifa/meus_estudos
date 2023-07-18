const timeOut = 2000
const checking = () => console.log('Eu estou apaixonado por Diana, alguém me ajuda!')
let intervalo = setInterval(checking, timeOut)
clearInterval(intervalo)