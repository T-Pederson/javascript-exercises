const ftoc = function(f) {
  // Convert fahrenheit to celcius
  let c = (f - 32) * 5 / 9;

  // Round to 1 decimal place
  c = parseFloat((Math.round(c * 10) / 10).toFixed(1));

  return c;
};

const ctof = function(c) {
  // Convert celcius to fahrenheit
  let f = c * 9 / 5 + 32;

  // Round to 1 decimal place
  f = parseFloat((Math.round(f * 10) / 10).toFixed(1));

  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
