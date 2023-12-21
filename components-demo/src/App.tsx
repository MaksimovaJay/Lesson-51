import {useState} from 'react'
import './App.css'

function App() {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32])
    function compareNumbers(a, b) {
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
        console.log(newNumbers)

        setNumbers(newNumbers);
    };
    return (
        <>
            <button type={"button"} onClick={generation}>New numbers</button>
            {numbers.map((circle, index) => (
                    <div key={index}>{circle}</div>
                )
            )}
        </>
    )
}

export default App
