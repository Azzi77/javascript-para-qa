console.log('Ola javascript')
 var userName ='Regina Azzi'

document.getElementById('userName').innerHTML = userName

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true


/* function soma (n1,n2) {

    console.log(n1 +n2)
}

soma (5,100) */

/* function boasVindas(nome) {
    alert(nome + ', seja bem vindo(a)')
}

boasVindas ('Regina') */

// function soma(n1,n2){ 
// return n1 + n2

// }

// var resultado = soma(5,5)
// console.log(resultado)
// */ 

//Cenario 1: Saque com sucesso
//Dado que meu saldo é de 1000 reais
//Quando faço um saque de 500 reais
//Então o valor do saque deve deduzir do meu saldo

/* var saldo = 1000  // dado que meu saldo é de 1000 reais
function saque(valor) {

    if (valor > saldo) {  // Se o valor do saque for maior que meu saldo
        console.log('Valor do saque superior ao saldo') //// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

    } else if (valor > 700) {
        console.log('Valor do saque é superior ao maximo permitido por operação')

    } else {
        saldo = saldo - valor // então o valor do saque deve deduzi do meu saldo
    }

}

saque(700) // massa de teste conforme cenario
console.log(saldo) */

 // Cenario 2: Saque com superior ao saldo
 // Dado que meu saldo é de 1000 reais
 //Quando faço um saque de 1100 reais
 //Então  nãp deve deduzir do meu saldo
 // E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

 // Cenario 3: Saque com valor maximo
 // Dado que meu saldo é de 1000 reais
 // E o valor máximo da operação é de 700 reais
 //Quando faço um saque de 710 reais
 //Então não deve deduzir do meu saldo
 // E deve mostrar  uma mensagem de alerta informando que o valor é superior ao maximo permitido


 //LOOPS

 var personagens = ['Animadinha', 'Carinhosa', 'Harmonia', 'Sol']
 
 //personagens.forEach(function(p) { // percorre a lista
  //  console.log(p)    
// })

//for (var i in personagens) {
 //   console.log(personagens[i]) // percorre a lista
//}


 

