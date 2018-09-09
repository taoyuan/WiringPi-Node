{
  'targets': [
    {
      'target_name': 'wirio',
      'sources': [
        'native/addon.cc',
        
        'native/wiringPi.cc',
        'native/softPwm.cc',
        'native/softTone.cc',
        'native/wiringPiI2C.cc',
        'native/wiringPiISR.cc',
        'native/wiringPiSPI.cc',
        'native/wiringSerial.cc',
        'native/wiringShift.cc',

        'native/wirio.cc'

      ],
      'include_dirs': [
        'wiringPi/wiringPi',
        'wiringPi/devLib',
	'<!(node -e \"require(\'nan\')\")'
      ],
      'libraries': [
        '-lwiringPi',
        '-lwiringPiDev'
      ],
      'cflags': [
        '-Wall',
        '-std=c++11',

      ],
      'conditions': [
        [ 'OS=="mac"', {
          'xcode_settings': {
            'OTHER_CPLUSPLUSFLAGS' : [ '-std=c++11', '-stdlib=libc++'],
            'MACOSX_DEPLOYMENT_TARGET': '10.9'
          }
        }],
      ],
    }
  ]
}
