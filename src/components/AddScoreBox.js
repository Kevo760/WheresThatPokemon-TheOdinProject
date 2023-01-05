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
import { useNavigate } from 'react-router-dom'


export default function AddScoreBox(props) {
  const { resetGamePage} = props
  const [playerName, setPlayerName] = useState()

  const [isLoading, setIsLoading] = useState(false)
  const [timeScore, setTimeScore] = useState()

  const navigate = useNavigate()

  const calculateServerTime = async() => {
    const startTimeRef = doc(db, 'Time', 'startTime')
    const endTimeRef = doc(db, 'Time', 'endTime')
    const startResult = (await getDoc(startTimeRef)).data()
    const endResult = (await getDoc(endTimeRef)).data()

    // grab data from time object
    const startSeconds = startResult.time
    const endSeconds = endResult.time

    // calculate time for end result into seconds and minues it from start result converted to seconds
    const serverScore = endSeconds.seconds - startSeconds.seconds

    return serverScore
  }


  const addScoreToServer = async(name, id, score) => {
    // Adds player information
    const scoreRef = collection(db, 'Scores');
    await addDoc(scoreRef, {
      name,
      id,
      score,
    })
  }


  // handles for data
  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // if player name is empty return
    if (playerName.name === '') {
      return
    };
    // Calculate server time to serverscore 
    const serverScore = await calculateServerTime()

    // await to add score to server
    await addScoreToServer(playerName, uuid(), serverScore)

    // reset player name to empty once app gets a response
    setPlayerName('')

    // Calls reset game page
    resetGamePage()

    // sent to leaderboard page
    return navigate('/leaderboard')
  }
    

  useEffect(() => {
    setIsLoading(true)
    // Gets score from the server
    const getScore = async() => {
    const startTimeRef = doc(db, 'Time', 'startTime')
    const endTimeRef = doc(db, 'Time', 'endTime')
    const startResult = (await getDoc(startTimeRef)).data()
    const endResult = (await getDoc(endTimeRef)).data()

    // grab data from time object
    const startSeconds = startResult.time
    const endSeconds = endResult.time

    // calculate time for end result into seconds and minues it from start result converted to seconds
    const serverScore = endSeconds.seconds - startSeconds.seconds
    // sets loading to false
    setIsLoading(false)
    // sets server time score
    setTimeScore(serverScore)
  }

  getScore()
  }, [])


  
  return (
    <ScoreBox>
        <AddScoreBoxHead>
            <h2>ADD YOUR SCORE</h2>
        </AddScoreBoxHead>

        <AddScoreForm onSubmit={(e) => handleSubmit(e)} >

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
              value={playerName}
              onChange={(e) => handleChange(e)}
           />

            <SubmitScoreBtn disabled={isLoading ? true : false}>Submit</SubmitScoreBtn>
        </AddScoreForm>
    </ScoreBox>
  )
}
