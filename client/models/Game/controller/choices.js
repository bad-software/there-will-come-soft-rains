import m from 'mithril'
import { Choices } from 'Models/Choices'


export function applyChoice( choice = 0 ) {
  // 0 -> Choice A, Anything else -> Choice B

  const { stats } = choice
    ? this.currentChoice.B
    : this.currentChoice.A

  this.sounds.select.play()
  this.ctrl.applyStatChanges( stats )
  this.ctrl.checkIfGameOver()
  this.ctrl.nextChoice()
}

export function initChoices() {
  this.choices = Choices.ctrl.getShuffledList()
}

export function nextChoice() {
  if ( this.choiceIndex < this.choices.length - 1 ) {
    this.choiceIndex++
    m.redraw()
  }
  // We're out of choices and haven't reached 100% progress. :(
  else this.ctrl.end( false )
}
