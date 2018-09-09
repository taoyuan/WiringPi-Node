#ifndef _WPI_SOFT_TONE_H_
#define _WPI_SOFT_TONE_H_

#include "addon.h"
namespace wirio {

  NAN_METHOD(softToneCreate);
  NAN_METHOD(softToneWrite);
  NAN_METHOD(softToneStop);

  NAN_MODULE_INIT(init_softTone);

}
#endif
