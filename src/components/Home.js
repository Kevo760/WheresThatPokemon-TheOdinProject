import React, { useState } from 'react'
import GamePage from './GamePage'
import MainPage from './MainPage'
import PageContext from './PageContext'

function Home() {
    const [loadMainPage, setLoadMainPage] = useState(true);
    const showMainPage = () => {
        setLoadMainPage(true)
    }
    const showGamePage = () => {
        setLoadMainPage(false)
    }

    

  return (
    <PageContext.Provider value={{main: loadMainPage, showMain: showMainPage, showGame: showGamePage}}>
        { loadMainPage ? 
            <MainPage />
            :
            <GamePage />
        }
    </PageContext.Provider>
  )
}

export default Home 