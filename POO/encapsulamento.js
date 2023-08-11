class Poligno{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

let poligno = new Poligno(50, 7)
console.log(poligno.area)