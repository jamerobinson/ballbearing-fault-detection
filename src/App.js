import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [filename, setFilename] = useState();

  const handleFileUpload = (event) => {
    setFilename('**loading**')
    console.log('log 1');
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("image", file);
    console.log('log2');
    // make a POST request to the File Upload API with the FormData object
    axios
      .post("http://3.144.217.159:5000/inference", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // handle the response
        setFilename(response.data.filename)
        console.log(response, typeof response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };

  function ImgDisplay({filename}) {
    if (filename && filename !== '**loading**') {
      return <img style={{height: "400px", marginTop: "1em"}} src={'http://3.144.217.159:5000/img/' + filename} alt='ballbearing' />
    }
    else if (filename === '**loading**') {
      return <div>Loading...</div>
    }
    else {
      return <></>
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
        Ballbearing Fault Detection App
        <input type="file" onChange={handleFileUpload} />
        <ImgDisplay filename={filename} />
      </header>
    </div>
  );
}

export default App;
