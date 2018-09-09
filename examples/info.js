const wpi = require('..');

wpi.wiringPiSetupGpio();

const rpiInfoArr = wpi.piBoardId();

console.log(rpiInfoArr);
