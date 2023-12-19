import { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  // useEffect(() => {
  //   // fetch("https://23oerh0rlk.execute-api.us-east-1.amazonaws.com/test", {
  //   //   method: "GET",
  //   //   mode: 'no-cors',
  //   // })
  //   // axios.get('https://23oerh0rlk.execute-api.us-east-1.amazonaws.com/test')
  //   axios.post('http://3.144.217.159:5000/inference', )
  //     .then((response) => console.log('response', response))
  //     .catch((error) => console.log(error));
  // }, []);

  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("image", file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post("http://3.144.217.159:5000/inference", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        Ballbearing Fault Detection App
        <input type="file" onChange={handleFileUpload} />
      </header>
    </div>
  );
}

export default App;
