import './App.css';
import GameImg from './components/StyledComp/GameImg';
import Header from './components/StyledComp/Header';
import ImgContainer from './components/StyledComp/ImgContainer';
import Logo from './components/StyledComp/Logo';
import imgLogo from './images/logo.png';
import gameimage from './images/gameimg.png'

function App() {
  return (
    <div className="App">
      <Header><Logo src={imgLogo} alt='logo'/></Header>
      <ImgContainer> <GameImg src={gameimage} alt='game image' onMouseMove={(e) => console.log(e.screenY, e.screenX )}/> </ImgContainer>
    </div>
  );
}

export default App;
