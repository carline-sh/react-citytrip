import { useState } from "react"

type City = { name: string, image: string };

const cities: City[] = [
  { name: "Amsterdam", image: "/amsterdam.jpg" },
  { name: "London", image: "/london.webp" }
];


function App() {

  const [votes, setVotes] = useState<string[]>([]);

  function vote(city: string) {
    setVotes([...votes, city]);
  }

  function reset() {
    setVotes([]);
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <ul>
          {cities.map(function (city) {
            return (<div>harro {city.name}
              <img src={city.image} className="voorbeeld" />
              </div>)
          })}
        </ul>
        {/* <div>Amsterdam: {votesAmsterdam}</div> */}
        {/* <button onClick={voteAmsterdam}> vote <img className="voorbeeld" src="/amsterdam.jpg" alt="" /></button> */}
        {/* <div>London: {votesLondon}</div> */}
        {/* <button onClick={voteLondon}> vote <img className="voorbeeld" src="london.webp" alt="" /></button> */}
        <button onClick={reset}>Reset</button>
      </div>

    </>
  )
}

export default App
