import React from 'react'

const Parent = () =>{
    return (
        <>
        <ConditionalRendering isValid={false}/>
        </>
    );
}

const ConditionalRendering = (props) => {
    if(props.isValid)
        {
            return 'Valid Password'
        }
        else{
            return <h1>Invalid Password</h1>
        }
  return (
    <>
    <div>This is {props.isValid}</div>
    {/* condition ? true : false */}
    {/* {props.isValid ? <h1>Valid Password</h1> : <h1>Invalid Password</h1>} */}
    
  </>
  )
}

export default Parent