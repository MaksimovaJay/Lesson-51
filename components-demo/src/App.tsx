import {useState} from 'react'
import Circle from "./Circle.tsx";
import './App.css'


function App() {
  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32])

  function compareNumbers(a: number, b: number): number {
    return a - b;
  }

  const generation = () => {
    let newNumbers: number[] = []
    for (let i = 0; i < 5; i++) {
      let randomNumber: number = Math.floor(Math.random() * 31) + 5;
      while (newNumbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 31) + 5;
      }
      newNumbers.push(randomNumber);
    }
    newNumbers.sort(compareNumbers)
    setNumbers(newNumbers);
  };
  return (
    <>
      <div className="wrapper">
        <button type={"button"} onClick={generation}>New numbers</button>
        <div className='wrapperCircle'>
          {numbers.map((circle, index) => (
              <Circle key={index} circle={circle}/>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default App
