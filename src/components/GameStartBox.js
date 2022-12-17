import React from 'react'
import { CharactersBox, CharaterProfile } from './StyledComp/Character'
import {GameBox} from './StyledComp/GameBox'
import scizor from '../images/scizor.png'
import lucario from '../images/lucario.png'
import zorua from '../images/zorua.png'
import { StartButton } from './StyledComp/Button'
import { serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'



export default function GameStartBox() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Set isLoading true
        const timeRef = doc(db, 'Time', 'startTime');
        // update startTime via server time on firebases
        updateDoc(timeRef, {
            time: serverTimestamp()
        })
        .then(reponse => {
            //When server gets response setLoading to false
            console.log(timeRef)
        })
        .catch(error => console.log(error.message))
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
