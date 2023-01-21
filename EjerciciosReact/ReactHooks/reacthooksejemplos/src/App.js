import BtnChange from './components/BtnChange';
import './App.css';
import CheckConHook from './components/CheckConHook';
import SelectStars from './components/SelectStars';
import FirstUseEffect from './components/FirstUseEffect';

function App() {
  return (
    <div className="App">
    <h1>Ejercicios con hooks</h1>
    <h4>Abra varios componentes en esta pagina</h4>
    <BtnChange/>
    <br/>
    <CheckConHook/>
    <br/>
    <SelectStars total={10}/>
    <br/>
    <FirstUseEffect/>
    </div>
  );
}

export default App;
