# from .pyduino import *
import time


def readData(a):
    time.sleep(3)
    # sleep to ensure ample time for computer to make serial connection

    PIN = 12
    POTENTIOMETER = 'A0'
    a.set_pin_mode(PIN, 'O')
    a.set_pin_mode(POTENTIOMETER, 'O')
    # initialize the digital pin as output

    time.sleep(1)
    # allow time to make connection
    while True:
        value = a.analog_read(POTENTIOMETER)
        print(value)
        return value

    # for i in range(0,1000):
    #     if i%2 == 0:
    #         a.digital_write(PIN, 1) # turn LED on
    #     else:
    #         a.digital_write(PIN, 0) # turn LED off

    #     time.sleep(1)


# readData(Arduino(serial_port='COM4'))
