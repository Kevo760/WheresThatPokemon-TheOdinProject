import './App.css'
import GamePage from './components/GamePage';





function App() {

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY;
    console.log(x, y)
  };

  return (
    <div className="App">
      <GamePage />
    </div>
  );
}

export default App;
