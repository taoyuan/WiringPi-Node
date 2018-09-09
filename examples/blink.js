const wirio = require('..');

wirio.wiringPiSetup();

console.log(process.env.WIRINGPI_GPIOMEM);

const pin = 0;

wirio.pinMode(pin, wirio.OUTPUT);

let value = 1;

setInterval(function() {
  wirio.digitalWrite(pin, value);
  value = +!value;
}, 50);
