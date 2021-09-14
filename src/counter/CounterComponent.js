import { useState } from "react"

const CounterComponent = () => {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    console.log(counter);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button>DECREMENT</button>
        </div>
    )
}

export default CounterComponent;