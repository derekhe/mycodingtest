enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("- - - - - - - - ", 120)
    if (true) {
        servos.P0.setAngle(90)
    } else {
        radio.sendMessage(RadioMessage.message1)
    }
    radio.sendMessage(RadioMessage.message1)
    music.ringTone(262)
})
basic.showNumber(0)
basic.forever(function () {
	
})
