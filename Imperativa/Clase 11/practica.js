const input = require("prompt-sync")({ sigint: true });

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

let banco={
  clientes:arrayCuentas,
  consultarCliente:function(nombre){
      for (let i=1;i<=this.clientes.length;i++){
        if(this.clientes[i-1].titularCuenta==nombre){
          return this.clientes[i-1]
        }
      }
  },
  deposito:function(titular,dinero_a_depositar){
    console.log(`Depósito realizado, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos+dinero_a_depositar}.`)
    this.consultarCliente(titular).saldoEnPesos=this.consultarCliente(titular).saldoEnPesos+dinero_a_depositar
  },
  extraccion:function(titular, dinero_a_retirar){
    console.log(`Extraccion realizado, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos-dinero_a_retirar}.`)
    this.consultarCliente(titular).saldoEnPesos=this.consultarCliente(titular).saldoEnPesos-dinero_a_retirar
  }
}

let continuar=true

while (continuar){
    let persona=input('Ingrese el nombre de la persona a la que desea hacerle la transaccion bancaria: ')
    let operacion=input("1 para deposito, 2 para extraccion: ")
    if (operacion==1){
        let monto=parseInt(input('Cuanto desea depositar: ')) 
        banco.deposito(persona,monto)
    }
    else{
        let monto=parseInt(input('Cuanto desea retirar: '))
        banco.extraccion(persona,monto)
    }
}