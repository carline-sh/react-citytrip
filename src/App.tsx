import { useState } from "react"

type City = { name: string, image: string };

const cities: City[] = [
  { name: "Amsterdam", image: "/amsterdam.jpg" },
  { name: "London", image: "/london.webp" }
];

const maxvotes = 10;

function App() {
  const [votes, setVotes] = useState<string[]>([]);

  function vote(city: string) {
    if (votes.length >= maxvotes) {
      return;
    }
    setVotes([...votes, city]);
  }

  function reset() {
    setVotes([]);
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>
        {
          votes.length >= maxvotes && <div>You are done voting</div>
        }
        <ul className="flex gap-2">
          {cities.map(function (city) {
            const cityVotes = votes.filter(a => a == city.name).length;
            return (<div className="border">harro {city.name}
              <div>
                {cityVotes}
              </div>
              <button onClick={() => vote(city.name)}>
                <img src={city.image} className="voorbeeld" />
              </button>
            </div>)
          })}
        </ul>
        <div>
          all the votes {JSON.stringify(votes)}
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App;
