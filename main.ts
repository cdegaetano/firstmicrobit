input.onButtonPressed(Button.A, function () {
    startCounter = true
    if (startCounter == true) {
        for (let index = 0; index <= 9; index++) {
            basic.showNumber(index)
            music.playTone(2000, 5)
        }
    }
    startCounter = false
    basic.clearScreen()
})
let startCounter = false
startCounter = false
basic.forever(function () {
	
})
