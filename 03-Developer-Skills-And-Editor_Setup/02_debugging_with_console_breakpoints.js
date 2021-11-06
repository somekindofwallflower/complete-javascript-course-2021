"use strict";
// Debugging with the Console and Breakpoints

const measureKelvin = function() {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C) FIX
    // value: Number(prompt('Degrees celsius'))
    value: 10
  };
// B) FIND
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}

// A) IDENTIFY
console.log(measureKelvin());



// Using a debugger
const calcTempAmplitudeBug = function(t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;
      if(curTemp > max) max = curTemp;
      if(curTemp < min) min = curTemp;
  }
  return max - min;
}


const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log('Amplitude bug', amplitudeBug);