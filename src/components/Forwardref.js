import React from 'react'

const Forwardref=React.forwardRef((props,ref)=>{
    return (
    <div>
        <input typr="text" ref={ref} />
    </div>)
}) 
export default Forwardref