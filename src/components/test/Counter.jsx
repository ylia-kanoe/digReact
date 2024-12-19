import { useEffect, useState } from "react";


function Counter() {
    const [count, setCount] = useState({
        name: 'test',
        count: 0
    })

    function updateState(symbols){
        setCount((prev) => ({ 
            name: prev.name == "test" ? "no test" : "test" , 
            count:  symbols == '+' ? prev.count + 1 : prev.count - 1 
        }))
    }

    useEffect(() => {
        let interval = setInterval(() => updateState('+'), 1000)

        if (count.count >= 15) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [count])


    return (
        <>
            <div>{count.name}: {count.count}</div>
            <button onClick={() => {  updateState('-') }}>-1</button>
            <button onClick={() => {  updateState('+') }}>+1</button>
        </>
    )
}


export { Counter };
