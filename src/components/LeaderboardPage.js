import React from 'react'
import Header from './StyledComp/Header'
import Logo from './StyledComp/Logo'
import { HeaderBtn } from './StyledComp/Button'
import pika from '../images/pika.gif'
import ScoreBoard from '../components/ScoreBoard'
import { Link } from 'react-router-dom'

function LeaderboardPage() {
  return (
    <div>
        <Header>
          <Logo src={pika} alt='logo'/>
          <h2>LEADERBOARD</h2>
          <Link to='/' className='link-style'>
            <HeaderBtn>Home</HeaderBtn>
          </Link>
        </Header>
        
        <ScoreBoard />
    </div>
  )
}

export default LeaderboardPage