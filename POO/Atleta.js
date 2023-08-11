class Atleta{
    peso;
    categoria;
    construtor(peso) {
        this.peso = peso
    }

    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = 'infantil'
        } else if(this.peso <+ 65){
            this.categoria = 'juvenil'
        } else{
            this.categoria = 'adulto'
        }
    }
}