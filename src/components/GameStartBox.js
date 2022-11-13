import React from 'react'
import { CharactersBox, CharaterProfile } from './StyledComp/Character'
import GameBox from './StyledComp/GameBox'
import scizor from '../images/scizor.png'
import lucario from '../images/lucario.png'
import zorua from '../images/zorua.png'
import { StartButton } from './StyledComp/Button'



export default function GameStartBox() {
  return (
    <GameBox>
        <h1>Welcome!</h1>
        <p>Find and tag the following Pokemons as fast as you can.</p>
        <CharactersBox>
            <CharaterProfile>
                <img src={scizor} alt='Scizor' />
                <b>Scizor</b>
            </CharaterProfile>

            <CharaterProfile>
                <img src={lucario} alt='Lucario' />
                <b>Lucario</b>
            </CharaterProfile>

            <CharaterProfile>
                <img src={zorua} alt='Zorua' />
                <b>Zorua</b>
            </CharaterProfile>
        </CharactersBox>

        <StartButton>Start Game</StartButton>
    </GameBox>
  )
}
