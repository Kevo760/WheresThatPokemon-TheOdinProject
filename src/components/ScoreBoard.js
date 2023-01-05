import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import { ScoreBox, ScoreBoxHeadSection, ScoreBoxLoading, ScoreBoxSections } from './StyledComp/GameBox'
import LoadingImg from './StyledComp/LoadingImg'
import loadingPB from '../images/loading.gif'

function ScoreBoard() {
    const [pScore, setpScore] = useState([])
    const [showScore, setShowScore ] = useState()
    const [isLoading, setIsLoading] = useState(true)


    
    // When page loads get score
    useEffect(() => {
        const getServerScores = async() => {
            const scoreRef = collection(db, 'Scores')
            const scoreDoc = await getDocs(scoreRef)
            const data = []
            scoreDoc.forEach((doc) => {
                data.push({...doc.data()})
            })
            setpScore(data)
            // sort score by lowest value
        const sortScore = pScore.sort(({score:a}, {score:b}) => a-b)
        // setScore using scoreboxsections
        const scores = sortScore.map(player => <ScoreBoxSections key={player.id}><p>{player.name}</p><p>{player.score}s</p></ScoreBoxSections>)
        setShowScore(scores)
        setIsLoading(false)
        }
        
        getServerScores()
    }, [pScore])

   

 
 


  return (
    <ScoreBox>
        <ScoreBoxHeadSection><b>NAME</b><b>TIME(SECONDS)</b></ScoreBoxHeadSection>
        {
            isLoading ?
            <ScoreBoxLoading><LoadingImg src={loadingPB} alt='loading image'/></ScoreBoxLoading>
            :
            showScore
        }
    </ScoreBox>
  )
}

export default ScoreBoard