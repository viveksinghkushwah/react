import React from 'react'

function Listrendering() { 
    const arr =['a','b','c']
  return (
    <div>{

        arr.map(x=><h1>{x+" hello"}</h1>)
        }</div>
  )
}

export default Listrendering