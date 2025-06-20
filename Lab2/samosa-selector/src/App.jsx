import './App.css';
import React from 'react';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  /*This state variable will be used to keep track of the current number of samosas per click.*/
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {setCount(count + multiplier);}

  const buyDoubleStuffed = () => {
  if (count >= 10) {
    setMultiplier(multiplier * 2);
    setCount(count - 10);
  }
}

const buyPartyPack = () => {
  if (count >= 100) {
    setMultiplier(multiplier * 5);
    setCount(count - 100);
  }
}

const buyFullFeast = () => {
  if (count >= 1000) {
    setMultiplier(multiplier * 10);
    setCount(count - 1000);
  }
}

  return (
    <div className="App">

      <div className="samosa-selector">
        <h1>Samosa Selector</h1>
        <h2> Count: {count}</h2>
        <img className="samosa" src="./src/assets/samosa.png" onClick={updateCount}/>

        <div className='container'> 
          <div className='upgrade'> 
            <h1>Double Stuffed</h1>
            <p> 2x per click</p>
            <button onClick={buyDoubleStuffed}>10 Samosa</button>
          </div>

          <div className='upgrade'> 
            <h1>Party Pack</h1>
            <p> 5x per click</p>
            <button onClick={buyPartyPack}> 100 Samosa</button>
          </div>

          <div className='upgrade'> 
            <h1>Full Feast</h1>
            <p> 10x per click</p>
            <button onClick={buyFullFeast}>1000 samosas</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App