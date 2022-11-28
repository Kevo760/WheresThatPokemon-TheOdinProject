import './App.css';
import AddScoreBox from './components/AddScoreBox';
import GameStartBox from './components/GameStartBox';
import PuzzleBox from './components/PuzzleBox';
import ScoreBoard from './components/ScoreBoard';
import Header from './components/StyledComp/Header';
import Logo from './components/StyledComp/Logo';
import pika from './images/pika.gif'
import Test from './Test';


function App() {

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY;
    console.log(x, y)
  };

  return (
    <div className="App">
      <Header><Logo src={pika} alt='logo'/><h1>Where's that Pokemon?</h1></Header>
      <ScoreBoard />
      <AddScoreBox>
        
      </AddScoreBox>
    </div>
  );
}

export default App;
