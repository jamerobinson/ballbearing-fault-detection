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
    // axios.get('https://23oerh0rlk.execute-api.us-east-1.amazonaws.com/test')
    axios.get('http://18.216.28.17:5000')
      .then((response) => console.log('response', response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Ballbearing Fault Detection App
      </header>
    </div>
  );
}

export default App;
