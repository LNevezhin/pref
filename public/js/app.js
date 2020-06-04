const dataPlayerU = new Array(4);
const dataPlayerZ = new Array(4);
const dataPlayerV = new Array(4);

playerResult = (player, playerLeft, playerRight) => {
   result =
      player[3] +
      player[2] +
      player[1] * 10 -
      player[0] * 2 * 10 / 3 +
      playerLeft[0] * 10 / 3 +
      playerRight[0] * 10 / 3 -
      playerLeft[3] -
      playerRight[2] -
      playerLeft[1] * 10 / 2 -
      playerRight[1] * 10 / 2;
   return result;
};

printResult = (player, result) =>
   document.querySelector('#Result' + player).innerHTML = Math.round(result);

getPlayerData = (i, player) =>
   Number.parseInt(document.querySelector(player + i).value);

getData = (dataPU, dataPZ, dataPV) => {
   for (i = 0; i < 4; i++) {
      dataPU[i] = getPlayerData(i, '#playerU');
      dataPZ[i] = getPlayerData(i, '#playerZ');
      dataPV[i] = getPlayerData(i, '#playerV');
   }
};

function calculate(dataPU, dataPZ, dataPV) {
   getData(dataPU, dataPZ, dataPV);
   printResult('PlayerU', playerResult(dataPU, dataPZ, dataPV));
   printResult('PlayerZ', playerResult(dataPZ, dataPV, dataPU));
   printResult('PlayerV', playerResult(dataPV, dataPU, dataPZ));
};