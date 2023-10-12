import {React, useState} from 'react'

export default function Home() {

    const [name, setName] = useState('Tuhin');
    const [age, setAge] = useState(34);

    const handleClick = () => {
        setName('Shahin');
        setAge(30);
        console.log("Button Clicked");
    }

   
  return (
    <div className="home">
        <h2>HomePage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}> Click Me</button>
    </div>
  )
}
