distance = 25000;
time = 710;
gender = "male";
pushUps = 40;
abs = 35;

function distance (val){
  return val >= 2100
}

function time (val){
  return val <= 720
}

function pushUps (val){
  return val >= 40
}

function abs (val){
  return val >= 35
}

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  if (distance(val) && time(val) && gender === 'male' && pushUps(val) && abs(val)) {
    passed = true;
  } else if (distance(val) && time(val) && gender === 'female' && pushUps(val) && abs(val)) {
    passed = true;
  }

  return passed;
}

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
