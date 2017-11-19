import {h, Component} from 'composi'
import {title} from './components/title'
import {Game} from './components/game'

// Set state on component.
// Will cause component to render.
title.state = 'Composi - Tic Tac Toe'

const game = new Game({
  container: 'section'
})
window.game = game