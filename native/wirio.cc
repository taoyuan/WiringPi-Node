#include "wirio.h"
// Node Module declaration and initialisation

namespace wirio {

    NAN_MODULE_INIT(init_wirio)
    {
        wirio::init_wiringPi(target);
        
        wirio::init_softPwm(target);
        wirio::init_softTone(target);

        wirio::init_wiringPiI2C(target);
        wirio::init_wiringPiSPI(target);
        wirio::init_wiringPiISR(target);
        wirio::init_wiringSerial(target);
        wirio::init_wiringShift(target);
    }
}

NODE_MODULE(wirio, wirio::init_wirio)
