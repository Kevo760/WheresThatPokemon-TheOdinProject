import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './lib/init-firebase'

function Test() {
    const [scores, setScores] = useState()

    function getScores() {
        const scoreRef = collection(db, 'Scores')
        getDocs(scoreRef)
        .then(reponse => {
            const score = reponse.docs.map(doc => doc.data())
            setScores(score[0].playerScores)
        })
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        getScores()
    }, [])

    
  return (
    <div>
    </div>
  )
}

export default Test