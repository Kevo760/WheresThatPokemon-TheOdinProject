import React, { useContext } from 'react'
import { CharactersBox, CharaterProfile } from './StyledComp/Character'
import {GameBox} from './StyledComp/GameBox'
import scizor from '../images/scizor.png'
import lucario from '../images/lucario.png'
import zorua from '../images/zorua.png'
import { StartButton } from './StyledComp/Button'
import PageContext from './PageContext'


export default function GameStartBox() {
    const page = useContext(PageContext)


    const handleSubmit = async(e) => {
        e.preventDefault();
        page.showGame()
    }

  return (
    <GameBox>
        <h1>Welcome!</h1>
        <p>Find and tag these Pokemon as fast as you can.</p>
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

        <StartButton onClick={e => handleSubmit(e)}>Start Game</StartButton>
    </GameBox>
  )
}
