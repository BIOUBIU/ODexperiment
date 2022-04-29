let bit_start_time = 0
let bit_end_time = 0
let bit_last_time = 0
let data: number[] = []
let bit1 = 0
let bit2 = 0
let bit3 = 0
let byte1 = 0
// 《国际歌》完整播放
input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Breve))
    music.playTone(349, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(698, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Happy International Worker's Day!")
})
// 数据
basic.forever(function () {
    if (input.lightLevel() > 10) {
        basic.showIcon(IconNames.SmallDiamond)
        bit_start_time = input.runningTime()
        while (true) {
            if (input.lightLevel() < 10) {
                bit_end_time = input.runningTime()
                bit_last_time = bit_end_time - bit_start_time
                if (bit_last_time < 190) {
                    data.push(0)
                    basic.showIcon(IconNames.Yes)
                    serial.writeNumbers(data)
                    break;
                } else {
                    data.push(1)
                    basic.showIcon(IconNames.Yes)
                    serial.writeNumbers(data)
                    break;
                }
            }
        }
    }
})
basic.forever(function () {
    serial.writeLine("" + input.lightLevel())
    basic.showNumber(data.length)
})
basic.forever(function () {
    while (data.length == 3) {
        bit1 = data.shift()
        bit2 = data.shift()
        bit3 = data.shift()
        byte1 = bit1 * 100 + (bit2 * 10 + bit3)
        if (byte1 == 1) {
            music.playTone(392, music.beat(BeatFraction.Double))
        } else if (byte1 == 10) {
            music.playTone(523, music.beat(BeatFraction.Double))
        } else if (byte1 == 11) {
            music.playTone(494, music.beat(BeatFraction.Double))
        } else if (byte1 == 100) {
            music.playTone(587, music.beat(BeatFraction.Double))
        } else if (byte1 == 101) {
            music.playTone(330, music.beat(BeatFraction.Double))
        } else if (byte1 == 110) {
            music.playTone(440, music.beat(BeatFraction.Double))
        } else {
            music.playTone(349, music.beat(BeatFraction.Double))
        }
    }
})
