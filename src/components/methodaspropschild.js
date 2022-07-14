import React from 'react'

function methodaspropschild(props) {
  return (
    <div>
        <button onClick={() => props.greethandler('vivek')}>Greet Parent</button>
    </div>
  )
}

export default methodaspropschild