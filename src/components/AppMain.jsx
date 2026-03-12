import { useState } from 'react'
const initialGames = ["dark souls 1","dark souls 2","dark souls 3","steelrising","the surge 1","the surge 2","bloodborne","elden ring"]

export default function AppMain(){
    const [newGame, setNewGame] = useState("")
    const [games, setGames] = useState(initialGames)
    
    function handleSubmit(e) {
      e.preventDefault()
      //console.log(e);
      console.log(newGame);
      if (! newGame.length < 1) {
        setGames([newGame, ...games])
        console.log(games);
        setNewGame("")
      } else {
        alert("scrivi almeno un carattere per aggiungere un nuovo gioco")
      }
        
    }

  return (
  <main> 
    <div className="container">
      <div className="card bg-dark border-warning p-3">
        <form onSubmit={handleSubmit}>
          <div className='d-flex gap-3 mb-3 justify-content-center'>
            <input type="text" value={newGame} onChange={e => setNewGame(e.target.value)}></input>
            <button className="btn btn-dark text-danger" type="submit">ADD GAME</button>
          </div>
        </form>
          <ul className="list-group">
            {games.map((game,index) =>(
              <li className="list-group-item d-flex justify-content-between align-items-center p-3 bg-secondary text-white" 
                  key={index + "-" + game.replaceAll(" ","-").toLowerCase()}>
              {game}
              <button className="badge text-bg-warning rounded-pill">🗑️😡delete</button>
              </li>
            ))}
          </ul>
      </div>
    </div>
    
  </main>
  )
}

