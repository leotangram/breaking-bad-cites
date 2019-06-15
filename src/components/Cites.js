import React from 'react'

function Cite({ cite }) {
  return (
    <div className='cite'>
      <h1>{cite.quote}</h1>
      <p>- {cite.author} -</p>
    </div>
  )
}

export default Cite
