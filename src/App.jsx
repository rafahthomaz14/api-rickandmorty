import './App.css'
import React, { useState, useEffect } from 'react'
import api from './Services/api'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [personagem, setPersonagem] = useState([])

  useEffect(() => {
    async function carregamento() {

      // Promise.all antes do api.get ele possibilita ter mais de uma api
      const responses = await Promise.all([
        api.get('https://rickandmortyapi.com/api/character/356'),
        api.get('https://rickandmortyapi.com/api/character/190'),
        api.get('https://rickandmortyapi.com/api/character/518'),
        api.get('https://rickandmortyapi.com/api/character/821'),
        api.get('https://rickandmortyapi.com/api/character/51'),
        api.get('https://rickandmortyapi.com/api/character/50'),
        api.get('https://rickandmortyapi.com/api/character/80'),
        api.get('https://rickandmortyapi.com/api/character/81')
      ])

      //entra no map e chama os dados 
      setPersonagem(responses.map(response => response.data));
    }
    carregamento()
  }, [])

  return (
    <div className='container'>
      <div className="conteudo">
        <div className="row p-4 ">
          {personagem.map((item) => (
            <div key={item.id} className="col-lg-3 col-sm-6 mb-5">
              <div className='card'>
                <h2>{item.name}</h2>
                <h3>{item.species}</h3>
                <p>{item.status}</p>
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
            </div>


          ))}
        </div>
      </div>
    </div>

  )
}

export default App
