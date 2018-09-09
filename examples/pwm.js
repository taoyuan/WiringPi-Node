// Example of using PWM
const wpi = require('..');
const async = require('async');

wpi.setup('wpi');

const pin = 1;
wpi.pinMode(pin, wpi.PWM_OUTPUT);

async.series([
  function (cb) {
    wpi.pwmWrite(pin, 100);
    cb();
  },
  function (cb) {
    setTimeout(cb, 1000);
  },
  function (cb) {
    wpi.pwmWrite(pin, 1023);
    cb();
  },
  function (cb) {
    setTimeout(cb, 1000);
  },
  function (cb) {
    wpi.pwmWrite(pin, 0);
    cb();
  }
], function (err) {
});
