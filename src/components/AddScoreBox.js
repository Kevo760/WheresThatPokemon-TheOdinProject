import React, { useState } from 'react'
import uuid from 'react-uuid'
import { SubmitScoreBtn } from './StyledComp/Button'
import { AddScoreForm, ScoreNameInput } from './StyledComp/Form'
import { AddScoreBoxHead,ScoreBox} from './StyledComp/GameBox'
import { YourScoreText } from './StyledComp/Text'
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../lib/init-firebase'


export default function AddScoreBox() {
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    score: '',
    id: '',
  })


  const handleChange = (e) => {
    setPlayerInfo({...playerInfo, name: e.target.value, id: uuid(), score: 20})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if player name is empy return
    if (playerInfo.name === '') {
      return
    };

    // Adds player information
    const scoreRef = collection(db, 'Scores');
    addDoc(scoreRef, playerInfo)
    .then(reponse => {
      // reset player info once app gets a response
      setPlayerInfo({
      name: '',
      score: '',
      id: '',
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  
  return (
    <ScoreBox>
        <AddScoreBoxHead>
            <h2>ADD YOUR SCORE</h2>
        </AddScoreBoxHead>
        <AddScoreForm onSubmit={handleSubmit}>
            <YourScoreText>Your Score: </YourScoreText>

            <ScoreNameInput
                placeholder='Enter Your Name'
                type='text'
                name='playername'
                value={playerInfo.name}
                onChange={(e) => handleChange(e)}
            />

            <SubmitScoreBtn>Submit</SubmitScoreBtn>
        </AddScoreForm>
    </ScoreBox>
  )
}
