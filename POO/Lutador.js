class lutador extends Atleta {
  construtor(peso){
    super(peso)
  }

  definirCategoria() {
 if(this.peso<= 54){
    this.categoria = 'pluma'
 } else if(this.peso <= 60){
    this.categoria = 'leve'
 } else if(peso <= 75){
    this.categoria = 'meio-leve'
 } else {
    this.categoria = 'pesado'
 }
}
}