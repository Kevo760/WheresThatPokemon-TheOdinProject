import React from 'react'
import { Button, StartButton, SubmitScoreBtn } from './StyledComp/Button'
import { AddScoreForm, ScoreNameInput } from './StyledComp/Form'
import { AddScoreBoxHead,ScoreBox} from './StyledComp/GameBox'
import { YourScoreText } from './StyledComp/Text'


export default function AddScoreBox() {
  return (
    <ScoreBox>
        <AddScoreBoxHead>
            <h2>ADD YOUR SCORE</h2>
        </AddScoreBoxHead>
        <AddScoreForm>
            <YourScoreText>Your Score: </YourScoreText>

            <ScoreNameInput
                placeholder='Enter Your Name'
            />

            <SubmitScoreBtn>Submit</SubmitScoreBtn>
        </AddScoreForm>
    </ScoreBox>
  )
}
