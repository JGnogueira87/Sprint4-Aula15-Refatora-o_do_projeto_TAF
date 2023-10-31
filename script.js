/*
distance = 25000;
time = 710;
gender = "male";
pushUps = 40;
abs = 35;
*/


function distance (valor){
  return valor >= 2100
}

function time (valor){
  return valor <= 720
}

function gender (valor){
  return valor === 'male'
}

function gender (valor){
  return valor === 'female'
}

function pushUps (valor){
  return valor >= 40
}

function abs (valor){
  return valor >= 35
}

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  if (gender === 'male' && distance (2100) && time (720) && pushUps (40) && abs (35)) {
    passed = true;
  } else if (gender === 'female' && distance (2100) && time (720) && pushUps (40) && abs (35)) {
    passed = true;
  }

  return passed;
}

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
