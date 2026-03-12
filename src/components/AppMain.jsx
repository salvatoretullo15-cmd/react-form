import { useState } from 'react'

export default function AppMain(){
    const [game, setGame] = useState("")
    const [Description, setDescription]= useState("")
    const souls = ["dark souls 1","dark souls 2","dark souls 3","steelrising","the surge 1","the surge 2","bloodborne","elden ring"]

    function handleSubmit(e) {
      e.preventDefault()
      //console.log(e);
      console.log(game);
      
      
    }

  return (
    <main> 
    <div className="container">
      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className='d-flex gap-3 mb-3 justify-content-center'>
            <input type="text" value={game} onChange={e => setGame(e.target.value)}></input>
            <button className="btn btn-dark text-danger" type="submit">ADD GAME</button>
          </div>
        </form>
          <ul className="list-group">
            {souls.map(soul =>(
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              {soul}
              <button className="badge text-bg-warning rounded-pill">🗑️😡</button>
              </li>
            ))}
          </ul>
      </div>
    </div>
    
    </main>
  )
}

