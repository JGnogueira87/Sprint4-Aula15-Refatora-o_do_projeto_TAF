/*
distance = 25000;
time = 710;
gender = "male";
pushUps = 40;
abs = 35;
*/


function verificaDistance (valor){
  return valor >= 2400
}

function verificaTime (valor){
  return valor <= 720
}

function verificaPushUps (valor){
  return valor >= 30
}

function verificaAbs (valor){
  return valor >= 30
}

function testTAF(verificaDistance(2500), verificaTime(710), verificaPushUps(40), verificaAbs(35)){
  passed = false;


/*
function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

*/

  if (gender === "male" && distance >= 2400 && time <= 720 && pushUps >= 30 && abs >= 35) {
    passed = true;
  } else if (gender === 'female' && distance >= 2400 && time <= 840 && pushUps >= 20 && abs >= 30) {
    passed = true;
  }

  return passed;
}



console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
