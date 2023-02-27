
import controls from "./controls.js"
import Timer from "./timer.js"
import Saund from "./saunds.js"
import {
  buttonMais,
  buttonMenos,
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  minutes,
  ButtonCafeteria,
  ButtonLareira,
  ButtonFloresta,
  ButtonChuva,
  ButtonBlack,
  ButtonWhite,
  AudioCafeteira,
  AudioFloresta,
AudioLareira,
AudioChuva
} from "./elements.js"

const Controls = controls ({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) 

const timer = Timer (
  {secondsDisplay,
   minutesDisplay,
   resetControls: Controls.reset,
   minutes
  }) 

  const saund = Saund()

  buttonPlay.addEventListener('click', function() {
    Controls.play()
    saund.buttonPressAudio.play()
    timer.countdown()
  })
  
  buttonPause.addEventListener('click', function() {
    Controls.pause()
    timer.hold()
    saund.buttonPressAudio.play()
  })
  
  buttonStop.addEventListener('click', function() {
    Controls.reset()
    timer.reset()
    saund.buttonPressAudio.play()
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = Controls.gatMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

buttonMais.addEventListener('click', function() {
   Controls.mais()
   saund.buttonPressAudio.play()
})

buttonMenos.addEventListener('click', function() { 
   Controls.menos()
   saund.buttonPressAudio.play()
})

ButtonBlack.addEventListener('click', function() {
  Controls.Black()
  saund.buttonPressAudio.play()
})

ButtonWhite.addEventListener('click', function() {
  Controls.White()
  saund.buttonPressAudio.play()
})

ButtonFloresta.addEventListener('click', function() {
  AudioLareira.pause()
  AudioCafeteira.pause()
  AudioChuva.pause()
  AudioFloresta.play()
})

ButtonChuva.addEventListener('click', function() {
  AudioLareira.pause()
  AudioCafeteira.pause()
  AudioChuva.play()
  AudioFloresta.pause()
})

ButtonCafeteria.addEventListener('click', function() {
  AudioLareira.pause()
  AudioCafeteira.play()
  AudioChuva.pause()
  AudioFloresta.pause()
})

ButtonLareira.addEventListener('click', function() {
  AudioLareira.play()
  AudioCafeteira.pause()
  AudioChuva.pause()
  AudioFloresta.pause()
})


