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


export default function AddScoreBox(props) {
  const {resetAllServerFoundCharacters, resetGamePage} = props
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    score: '',
    id: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [timeScore, setTimeScore] = useState()


  // handles for data
  const handleChange = async(e) => {
    setPlayerInfo({...playerInfo, name: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // if player name is empy return
    if (playerInfo.name === '') {
      return
    };


    const startTimeRef = doc(db, 'Time', 'startTime')
    const endTimeRef = doc(db, 'Time', 'endTime')
    const startResult = (await getDoc(startTimeRef)).data()
    const endResult = (await getDoc(endTimeRef)).data()

    // grab data from time object
    const startSeconds = startResult.time
    const endSeconds = endResult.time

    // calculate time for end result into seconds and minues it from start result converted to seconds
    const serverScore = endSeconds.seconds - startSeconds.seconds
    
    // await for setPlayerInfo to set player server score and unique id
    await setPlayerInfo({...playerInfo, id: uuid(), score: serverScore})

    // Adds player information
    const scoreRef = collection(db, 'Scores');
    await addDoc(scoreRef, playerInfo)

    // resets all found pokemon value to false on server side
    await resetAllServerFoundCharacters()
    
    // reset player info once app gets a response
    setPlayerInfo({
      name: '',
      score: '',
      id: '',
      })

    // Calls reset game page
    resetGamePage()
  }
    

  useEffect(() => {
    setIsLoading(true)
  }, [])

  useEffect(() => {
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
  })

  
  return (
    <ScoreBox>
        <AddScoreBoxHead>
            <h2>ADD YOUR SCORE</h2>
        </AddScoreBoxHead>

        <AddScoreForm onSubmit={e => handleSubmit(e)} >

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

            <SubmitScoreBtn disabled={isLoading ? true : false}>Submit</SubmitScoreBtn>
        </AddScoreForm>
    </ScoreBox>
  )
}
