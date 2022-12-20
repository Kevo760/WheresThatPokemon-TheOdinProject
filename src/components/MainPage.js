import React from 'react'
import Header from './StyledComp/Header'
import pika from '../images/pika.gif'
import GameStartBox from './GameStartBox'
import Logo from './StyledComp/Logo'
import { HeaderBtn } from './StyledComp/Button'


function MainPage() {
  return (
    <div>
        <Header><Logo src={pika} alt='logo'/><h2>Where's that Pokemon?</h2><HeaderBtn>Leaderboard</HeaderBtn></Header>
        <GameStartBox />
    </div>
  )
}

export default MainPage