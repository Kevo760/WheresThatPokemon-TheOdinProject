import React from 'react'
import Header from './StyledComp/Header'
import Logo from './StyledComp/Logo'
import { HeaderBtn } from './StyledComp/Button'
import pika from '../images/pika.gif'
import ScoreBoard from '../components/ScoreBoard'

function LeaderboardPage() {
  return (
    <div>
        <Header><Logo src={pika} alt='logo'/><h2>LEADERBOARD</h2><HeaderBtn>Home</HeaderBtn></Header>
        <ScoreBoard />
    </div>
  )
}

export default LeaderboardPage