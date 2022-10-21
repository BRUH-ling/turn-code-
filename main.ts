input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
    _1 += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    _1 += 1
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
    _1 += 1
})
radio.setGroup(1)
let _1 = 1
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    if (_1 > 2) {
        _1 = 0
        _1 = 1
    }
    if (_1 == 0) {
        _1 = 1
        radio.sendNumber(5)
    }
})
