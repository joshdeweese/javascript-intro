let calculateBMI = function (weightInKilograms, heightInCM) {
  let heightInMeters = heightInCM / 100
  let bmi = weightInKilograms / heightInMeters**2;
  console.log(bmi);
}

calculateBMI(80,180);