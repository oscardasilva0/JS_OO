class Cliente {
  nome;
  cpf;

}

class ContaCorrente {
  agencia;
  saldo;
  sacar(valor){
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}

const clinete1 = new Cliente();
clinete1.nome = "Ricardo";
clinete1.cpf = 45612378974;
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;

contaCorrenteRicardo.sacar(200)
console.log(contaCorrenteRicardo.saldo);



const clinete2 = new Cliente();
clinete2.nome = "Maria";
clinete2.cpf = 11122233309;
const contaCorrenteMaria = new ContaCorrente();
contaCorrenteMaria.saldo = 0;
contaCorrenteMaria.agencia = 1001;
console.log(contaCorrenteMaria.saldo);
contaCorrenteMaria.saldo = 100;


console.log(clinete1);
console.log(clinete2);

