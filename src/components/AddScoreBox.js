import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import { SubmitScoreBtn } from './StyledComp/Button'
import { AddScoreForm, ScoreNameInput } from './StyledComp/Form'
import { AddScoreBoxHead,ScoreBox} from './StyledComp/GameBox'
import { YourScoreTextBox } from './StyledComp/Text'
import { collection, addDoc, doc, getDoc} from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import LoadingImg from './StyledComp/LoadingImg'
import loadingGif from '../images/loading.gif'


export default function AddScoreBox() {
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    score: '',
    id: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const [timeScore, setTimeScore] = useState()

  const getScore = async() => {
    const startTimeRef = doc(db, 'Time', 'startTime')
    const endTimeRef = doc(db, 'Time', 'endTime')
    const startResult = (await getDoc(startTimeRef)).data()
    const endResult = (await getDoc(endTimeRef)).data()

    const startSeconds = startResult.time
    const endSeconds = endResult.time

    const serverScore = endSeconds.seconds - startSeconds.seconds
    setIsLoading(false)
    setTimeScore(serverScore)
  }


  const handleChange = (e) => {
    setPlayerInfo({...playerInfo, name: e.target.value, id: uuid()})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if player name is empy return
    if (playerInfo.name === '') {
      return
    };

    let endResult;
    let startResult;

    const startTimeRef = doc(db, 'Time', 'startTime')
    const endTimeRef = doc(db, 'Time', 'endTime')
    getDoc(startTimeRef)
    .then(response => {
      startResult = response.data()
    })
    .catch(error => console.log(error.message))

    getDoc(endTimeRef)
    .then(response => {
      endResult = response.data()
    })
    .catch(error => console.log(error.message))

    const startSeconds = startResult.time
    const endSeconds = endResult.time

    const serverScore = endSeconds.seconds - startSeconds.seconds

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

  useEffect(() => {
    setIsLoading(true)
  }, [])

  useEffect(() => {
    getScore()
  }, [getScore])

  
  return (
    <ScoreBox>
        <AddScoreBoxHead>
            <h2>ADD YOUR SCORE</h2>
        </AddScoreBoxHead>
        <AddScoreForm onSubmit={e => handleSubmit(e)}>

          <YourScoreTextBox>
            <span>Your Score:</span>
            { isLoading ?
              <LoadingImg src={loadingGif} alt='loading gif' />
              :
              timeScore + 's'
            }
          </YourScoreTextBox>
              
          <ScoreNameInput
              placeholder='Enter Your Name'
              type='text'
              name='playername'
              value={playerInfo.name}
              onChange={(e) => handleChange(e)}
           />

            <SubmitScoreBtn disabled={false}>Submit</SubmitScoreBtn>
        </AddScoreForm>
    </ScoreBox>
  )
}
