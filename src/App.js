import { useEffect, useState } from 'react';
import './App.css';


const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'


function App() {
  const [data, setData] = useState([])
  const [object, setObject] = useState(null)

  useEffect(() => {

    fetch(URL)
    .then(response => response.json())
    .then(response => setData(response.quotes))

  }, [])


  const generateQuote = () => {
    const dataIndex = Math.floor(Math.random() * data.length)
    setObject(data[dataIndex])
  }


  const resault = object
  ?
    <div>
      <h1>{object.quote}</h1>
      {object.author === "Unknown" ? <h2>"The author is unknown"</h2> : <h2>"{object.author}"</h2>}
    </div>
  : <h1 className='start'>Press the button</h1>



  return (
    <div className="App">
      <div className='child'>
          {resault}
          <div>
            <button onClick={generateQuote}>Get Quote</button>
          </div>
        </div>
      </div>
  );
}

export default App;
