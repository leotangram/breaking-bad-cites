import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  console.log(cite)

  return <p>Hola</p>
}

export default App
