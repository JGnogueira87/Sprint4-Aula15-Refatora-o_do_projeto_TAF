/*distance = 25000;
time = 710;
gender = "male";
pushUps = 40;
abs = 35;
*/

function verifyDistance (gender, distance){
  if (gender === "male"){
    if (distance >= 2400){
      return true
  }
  return false
} else{
    if (distance >= 2400){
      return true
  }
  return false
}
}


function verifyTime (gender, time){
  if (gender === "male"){
  if (time <= 720){
    return true
  }
  return false
} else{
  if (time <= 840){
    return true
}
return false
}
}


function verifyPushUps (gender, pushUps){
  if (gender === "male"){
    if (pushUps >= 30){
      return true
  }
  return false
} else{
    if (pushUps >= 20)
      return true
  }
  return false
}


function verifyAbs (gender, abs){
  if (gender === "male"){
    if (abs >= 35){
      return true
  }
  return false
} else{
    if (abs >= 30){
      return true
  }
  return false
}
}


function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  if (verifyDistance (gender, distance) && verifyTime (gender, time) && verifyPushUps (gender, pushUps) && verifyAbs (gender, abs)) {
    passed = true;
  } 
  return passed;
}

// console.log(
//   "Candidato passou no teste?: \nresposta: ",

//   testTAF(distance, time, gender, pushUps, abs)
// );

module.exports = testTAF;
