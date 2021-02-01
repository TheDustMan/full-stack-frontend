import logo from './logo.svg';
import './App.css';
import TestElement from './components/TestElement';
import PropAggregator from './components/PropAggregator';
import doTick from './components/Ticker';
import Clock from './components/Clock';
import Clock2 from './components/Clock2';
import ActionLink from './components/ActionLink';
import ToggleButton from './components/ToggleButton';
import InputIteratorButton from './components/InputIteratorButton';
import SaveListForm from './forms/SaveListForm';
import Clock3 from './components/Clock3';

function App() {
  return (
    <div className="App">
      <TestElement/>
      <PropAggregator name="LOL"/>
      <Clock/>
      <Clock2/>
      <Clock3/>
      <ActionLink/>
      <ToggleButton/>
      <InputIteratorButton/>
      <SaveListForm/>
      <div id='components'>
      {doTick()}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hi Lol
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
