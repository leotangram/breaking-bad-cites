import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cite from './components/Cites'

function App() {
  const [cite, setCite] = useState({})

  const consultAPI = async () => {
    const result = await axios(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    )

    // Agregar el resultado del API al state; (Similar a this.setState)
    setCite(result.data[0])
  }

  // Consulta a una rest api
  useEffect(() => {
    consultAPI()
  }, [])

  return (
    <div className='container'>
      <Cite cite={cite} />
      <button onClick={consultAPI}>Generar nueva</button>
    </div>
  )
}

export default App
