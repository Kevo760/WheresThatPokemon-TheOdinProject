import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import { ScoreBox, ScoreBoxHeadSection, ScoreBoxLoading, ScoreBoxSections } from './StyledComp/GameBox'
import LoadingImg from './StyledComp/LoadingImg'
import loadingPB from '../images/loading.gif'

function ScoreBoard() {
    const [pScore, setpScore] = useState()
    const [ showScore, setShowScore ] = useState()

    //  const sortScores = pScore.sort(({score:a}, {score:b}) => a-b)
    //  const showScores = sortScores.map(player => <ScoreBoxSections key={player.id}><p>{player.name}</p><p>{player.score}</p></ScoreBoxSections>)

    // get score from firebase data base
    function getScores() {
        const scoreRef = collection(db, 'Scores')
        getDocs(scoreRef)
        .then(reponse => {
            const score = reponse.docs.map(doc => doc.data())
            return setpScore(score[0].playerScores)
        })
        .catch(error => console.log(error.message))
    }

    // get showScore value
    function getShowScore() {
        // sort score by lowest value
        const sortScore = pScore.sort(({score:a}, {score:b}) => a-b)
        // setScore using scoreboxsections
        const scores = sortScore.map(player => <ScoreBoxSections key={player.id}><p>{player.name}</p><p>{player.score}</p></ScoreBoxSections>)
        setShowScore(scores)
    }
    
    // When page loads get score
    useEffect(() => {
        getScores()
    }, [])

    // if pScore is defined return getShowScore
    useEffect(() => {
        if(pScore) {
            setTimeout(() => {
                getShowScore()
            }, 2000); 
        }  
    }, [pScore])
    


  return (
    <ScoreBox>
        <ScoreBoxHeadSection><b>NAME</b><b>TIME(SECONDS)</b></ScoreBoxHeadSection>
        {
            showScore ?
            showScore :
            <ScoreBoxLoading><LoadingImg src={loadingPB} alt='loading image'/></ScoreBoxLoading>
        }
    </ScoreBox>
  )
}

export default ScoreBoard