import { ButtonBlack,
   ButtonWhite,
    ButtonPage,
    Relogio,
    Controlers,
    ButtonCafeteria,
    ButtonLareira,
    ButtonChuva,
    ButtonFloresta
  } from "./elements.js"

export default function controls ({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
}) {

  minutesDisplay = document.querySelector('.minutes')

  function reset() {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      buttonSet.classList.remove('hide')
      buttonStop.classList.add('hide')
    }

    function play () {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
      buttonSet.classList.add('hide')
      buttonStop.classList.remove('hide')
    }

    function pause () {
      buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    }

    function mais () {
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
    }

    function menos () {
      let minutes = Number(minutesDisplay.textContent)
      if(minutes >= 3) {
          minutesDisplay.textContent = String(minutes - 3).padStart(2, "0")
      }
    }

    function gatMinutes () {
      let newMinutes = prompt('Quantos minutos?')
      if (!newMinutes) {
        return false
      }
    
      return newMinutes
    }

    function Black () {
      ButtonWhite.classList.remove('hide')
      ButtonBlack.classList.add('hide')
      ButtonPage.classList.remove('Hide-bg')
      Relogio.classList.remove('Hide-cl')
      Controlers.classList.remove('Hide-cl')
      ButtonCafeteria.classList.remove('Hide-fill')
      ButtonLareira.classList.remove('Hide-fill')
      ButtonChuva.classList.remove('Hide-fill')
      ButtonFloresta.classList.remove('Hide-fill')
    }

    function White () {
     ButtonWhite.classList.add('hide')
     ButtonBlack.classList.remove('hide')
     ButtonPage.classList.add('Hide-bg')
     Controlers.classList.add('Hide-cl')
     Relogio.classList.add('Hide-cl')
     ButtonCafeteria.classList.add('Hide-fill')
     ButtonLareira.classList.add('Hide-fill')
     ButtonChuva.classList.add('Hide-fill')
     ButtonFloresta.classList.add('Hide-fill')
    }

    return {
      reset,
      play,
      pause,
      mais,
      menos,
      gatMinutes,
      Black,
      White,
    }
}
