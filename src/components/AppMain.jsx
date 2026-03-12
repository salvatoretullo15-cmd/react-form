import { useState } from 'react'

export default function AppMain(){
    const [game, setGame] = useState("")
    const [Description, setDescription]= useState("")

    function handleSubmit(e) {
      e.preventDefault()
      //console.log(e);
      console.log(game);
      
      
    }

  return (
    <main className="container d-flex justify-content-center"> 
      <form className="" onSubmit={handleSubmit}>
        <input type="text" value={game} onChange={e => setGame(e.target.value)}></input>
        <button type="submit">add game</button>
      </form>
    </main>
  )
}

