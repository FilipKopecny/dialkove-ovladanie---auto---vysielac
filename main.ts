radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("dopredud", pins.analogReadPin(AnalogPin.P0))
    radio.sendValue("vpravovl", pins.analogReadPin(AnalogPin.P2))
})
