import { useState } from "react"

function App() {

  const [votesAmsterdam, setVotesAmsterdam] = useState(0);
  const [votesLondon, setVotesLondon] = useState(0);

  function voteAmsterdam() {
    setVotesAmsterdam(votesAmsterdam + 1);
  }
  
  function voteLondon() {
    setVotesLondon(votesLondon + 1);
  }
  

  function reset() {
    setVotesAmsterdam(0);
    setVotesLondon(0);
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <div>Amsterdam: {votesAmsterdam}</div>
        <button onClick={voteAmsterdam}> vote <img className="voorbeeld" src="/amsterdam.jpg" alt="" /></button>
        <div>London: {votesLondon}</div>
        <button onClick={voteLondon}> vote <img className="voorbeeld" src="london.webp" alt="" /></button>
        <button onClick={reset}>Reset</button>
      </div>
      
    </>
  )
}

export default App
