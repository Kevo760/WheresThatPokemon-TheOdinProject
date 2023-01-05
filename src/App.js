import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import LeaderboardPage from './components/LeaderboardPage'








function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='leaderboard' element={<LeaderboardPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
