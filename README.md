# wirio

>  Node.js bindings to [wiringPi](http://www.wiringpi.com)
> `wirio` is based on https://github.com/WiringPi/WiringPi-Node

It differs from the original project by:

* Using a vanilla WiringPi.com install, rather than a customised build.  
This version of the node bindings will be missing features that have been added to https://github.com/WiringPi/WiringPi-Node.

* Using [NAN](https://github.com/nodejs/nan) to provide Node version abstraction
Hopefully this makes it more resilient against Node API changes

This should mean that installation is simpler, and supports npm install -g (global mode).

## Install

Make sure you have [WiringPi](http://wiringpi.com/download-and-install/) installed.  On Raspbian Jessie, this should be as easy as:

```bash
sudo apt-get install wiringpi
```

See the [WiringPi](http://wiringpi.com/download-and-install/) link for more options and details.

Or install [BPI-WiringPi2](https://github.com/BPI-SINOVOIP/BPI-WiringPi2) for BananaPi.

```bash
# install bpi-tools for detecting bpi board model
> curl -sL https://github.com/BPI-SINOVOIP/bpi-tools/raw/master/bpi-tools | sudo -E bash -

# generating hardware info
> sudo bpi-hw

# install bpi wiringpi
> git clone https://github.com/BPI-SINOVOIP/BPI-WiringPi2
> cd BPI-WiringPi2
> ./build
```

To install this node module:

```bash
npm install wirio
```

## Usage

```js
const wirio = require('wirio');
```

## TODO

* Documentation!
* Review export constants
* Add NAN_MODULE_INIT signatures to .h files
* Update build script - rebuild or configure build?
* Add devlib / extensions
* wiringPiISR vs epoll documentation (#3)
* Add util to replace gpio (read config and set pins as root)


Contributor | GitHub profile | Twitter profile |
--- | --- | ---
Igor Soarez (Creator) | [Soarez](https://github.com/Soarez) | [@igorsoarez](https://twitter.com/igorsoarez)
Leandre Gohy | [nekuz0r](https://github.com/nekuz0r) | [@LeandreGohy](http://twitter.com/LeandreGohy)
Eugene Ware | [eugeneware](https://github.com/eugeneware) | [@eugeneware](http://twitter.com/eugeneware)
Ivo Stratev | [NoHomey](https://github.com/NoHomey) |
Chris Continanza | [csquared](https://github.com/csquared) | [@csquared](https://twitter.com/em_csquared/)
Tao Yuan | [taoyuan](https://github.com/taoyuan) | [@taoyvan](https://twitter.com/taoyvan)
Tom Janson | [tjanson](https://github.com/tjanson) |
Vincent Terraillon | [LouTerrailloune](https://github.com/LouTerrailloune) | [@pure74vincent](https://twitter.com/pure74vincent)
