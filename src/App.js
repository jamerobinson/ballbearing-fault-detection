import { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    // fetch("https://23oerh0rlk.execute-api.us-east-1.amazonaws.com/test", {
    //   method: "GET",
    //   mode: 'no-cors',
    // })
    axios.get('https://23oerh0rlk.execute-api.us-east-1.amazonaws.com/test')
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. This is a test
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
