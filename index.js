// Início do código
// Desafio: Criar um sistema de níveis para um jogo de RPG baseado na quantidade de
// experiência (XP) do jogador.
// Para executar o código, use o comando: node index.js

let xp;
let name;
let level;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do Herói: ', (name) => {
  rl.question('Digite o valor de XP: ', (xpInput) => {
    const xp = Number(xpInput);
    let level;

    switch (true) {
      case xp < 1000:
        level = "Ferro";
        break;
      case xp >= 1001 && xp <= 2000:
        level = "Bronze";
        break;
      case xp >= 2001 && xp <= 5000:
        level = "Prata";
        break;
      case xp >= 5001 && xp <= 7000:
        level = "Ouro";
        break;
      case xp >= 7001 && xp <= 8000:
        level = "Platina";
        break;
      case xp >= 8001 && xp <= 9000:
        level = "Ascendente";
        break;
      case xp >= 9001 && xp <= 10000:
        level = "Imortal";
        break;
      default:
        level = "Radiante";
    }

    console.log(`O Herói de nome ${name} está no nível de ${level}.`);
    rl.close();
  });
});
// Fim do código
