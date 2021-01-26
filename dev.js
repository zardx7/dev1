var readlineSync = require('readline-sync');
const { curl, GetStr, rand } = require('johngrimm-utils')
console.clear();

console.log("1 - Sobre");
console.log("2 - Consulta");
console.log("3 - Fechar");

var teste = readlineSync.question('Selecione a opcao acima: ');

if(teste == 1){
  console.log('voce escolheu a opcao 1.')
} else if(teste == 2){

  setInterval(() => {
    var number = rand(0, 999)
    console.log(`numero gerado: ${number}`)
  }, 1000 * 3)

}