class Data {
  //   dia: number;
  //   private mes: number;
  //   ano: number;

  constructor(
    public dia: number,
    public mes: number,
    public ano: number = 1970
  ) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}
const data = new Data(1, 2, 2020);
const data2 = new Data(3, 2);
console.log(data.dia);
console.log(data.ano);

class Carro {
  private velocidadeAtual: number = 0;
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  acelerar() {
    const aceleracao = 5;

    if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
      this.velocidadeAtual += aceleracao;
    }
  }
}
const carro = new Carro("chevrolet", "prisma", 250);
