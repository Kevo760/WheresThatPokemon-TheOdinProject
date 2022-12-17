import './App.css';
import Header from './components/StyledComp/Header';
import Logo from './components/StyledComp/Logo';
import pika from './images/pika.gif';
import PuzzleBox from './components/PuzzleBox'





function App() {

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY;
    console.log(x, y)
  };

  return (
    <div className="App">
      <Header><Logo src={pika} alt='logo'/><h1>Where's that Pokemon?</h1></Header>
      <PuzzleBox />
    </div>
  );
}

export default App;
