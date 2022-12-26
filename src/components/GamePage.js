import React, { useEffect, useState } from 'react'
import Header from './StyledComp/Header'
import { HeaderBtn } from './StyledComp/Button'
import PuzzleBox from './PuzzleBox'
import AddScoreBox from './AddScoreBox'
import { CharaterLeftImg } from './StyledComp/Character'
import lucario from '../images/lucario.png'
import zorua from '../images/zorua.png'
import scizor from '../images/scizor.png'
import Loading from './Loading'
import { db } from '../lib/init-firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';


function GamePage() {
  const charactersInitalState = {
    lucario: false,
    scizor: false,
    zorua: false
  }

  const [foundCharacter, setFoundCharacter] = useState(charactersInitalState)
  const [addScore, setAddScore] = useState(true)
  

  // change find character true by name
  const foundCharacterHandler = (name) => {
    setFoundCharacter({
      ...foundCharacter, [name]: true
    })
  }
  // resets value for foundCharacters
  const resetFoundCharacters = () => {
    setFoundCharacter(charactersInitalState)
  }
  // shows addscore page
  const showAddScore = () => {
    setAddScore(true)
  }
  // hides the addscore page
  const hideAddScore = () => {
    setAddScore(false)
  }

  // reset whole game
  const resetGamePage = () => {
    resetFoundCharacters()
    hideAddScore()
  }



    // get pokemon data sync method from the firestore
    const getPokeData = async () => {
      let allData = []
      // get data from firebase
      const docRef = collection(db, 'Logs')
      const data = (await getDocs(docRef))
      // grab multiple data and push it to allData variable
      data.forEach((doc) => {
        allData.push(doc.data())
      })
      
      // returns if all pokemon are found via firestore data
      return allData.every(poke => poke.found === true)
    }
    
    // Resets found to false value on firestore
  const resetAllServerFoundCharacters = async() => {
    const lucarioRef = doc(db, 'Logs', 'lucario')
    const zoruaRef = doc(db, 'Logs', 'zorua')
    const scizorRef = doc(db, 'Logs', 'scizor')

    await updateDoc(lucarioRef, {
      found: false
    })
    await updateDoc(zoruaRef, {
      found: false
    })
    await updateDoc(scizorRef, {
      found: false
    })
  }


  return (
    <div>
        <Header>
          <div>
            <CharaterLeftImg found={foundCharacter.zorua} src={zorua} alt='zorua'/>
            <CharaterLeftImg found={foundCharacter.lucario} src={lucario} alt='lucario'/>
            <CharaterLeftImg found={foundCharacter.scizor} src={scizor} alt='scizor'/>
          </div>
          <HeaderBtn>Home</HeaderBtn>
        </Header>


        {/* If loading is false and addScore is false show puzzlebox */}
        { !addScore ?
          <PuzzleBox 
            {...{foundCharacterHandler, resetFoundCharacters, getPokeData, showAddScore}}
          />
          :
          <AddScoreBox />
        }
    </div>
  )
}

export default GamePage