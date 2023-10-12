import React from 'react'

export default function Home() {
    const handleClick = (e) => console.log("Button Clicked",e);

    const handleClickAgain = (name,e)=>{
        console.log("Hello " + name ,e.target);
    }
  return (
    <div className="home">
        <h2>HomePage</h2>
        <button onClick={handleClick}> Click Me</button>
        <button onClick={(e)=> handleClickAgain('Mario',e)}>Click Me Agian</button>
    </div>
  )
}
