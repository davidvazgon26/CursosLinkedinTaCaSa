import BtnChange from './components/BtnChange';
import './App.css';
import CheckConHook from './components/CheckConHook';
import SelectStars from './components/SelectStars';
import FirstUseEffect from './components/FirstUseEffect';
import APIConUseEffect from './components/APIConUseEffect';
import SumaConUseReducer from './components/SumaConUseReducer';
import CheckConReducer from './components/CheckConReducer';
import StateAndDispatch from './components/StateAndDispatch';
import FormConUseRef from './components/FormConUseRef';
import FormConUseState from './components/FormConUseState';
import FormConHookPersonalizado from './components/FormConHookPersonalizado';
import UsarUseCOntext from './components/UsarUseContext';
import UsandoUseFetch from './components/UsandoUseFetch';

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
    <br/>
    <APIConUseEffect/>
    <br/>
    <SumaConUseReducer/>
    <br/>
    <CheckConReducer/>
    <br/>
    <StateAndDispatch/>
    <br/>
    <FormConUseRef/>
    <br/>
    <FormConUseState/>
    <br/>
    <FormConHookPersonalizado/>
    <br/>
    <UsarUseCOntext/>
    <br/>
    <UsandoUseFetch login="davidvazgon26"/>
    </div>
  );
}

export default App;
