import { useState } from 'react'
import './App.css'
import opticalIllusions from './data/opticalIllusions'

function App() {
  
  const [myIllusion, setMyIllusion] = useState(0)

  const handleClick = (value) => {
    let tmp = myIllusion
    tmp += value

    tmp === opticalIllusions.length && (tmp = 0)
    tmp < 0 && (tmp = opticalIllusions.length -1)

    setMyIllusion(tmp)
  }

  console.log(opticalIllusions)

  return (
    <div className="App">
      <button onClick={() => handleClick(-1)}>prev</button>
      
      <main>
        <h1>Optical illusion #{myIllusion+1} : {opticalIllusions[myIllusion].name}</h1>
        {opticalIllusions[myIllusion].comp}
      </main>
 
      <button onClick={() => handleClick(-1)}>next</button>
    </div>
  );
}

export default App;
