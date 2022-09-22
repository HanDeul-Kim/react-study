import { useState, useTransition, useDeferredValue } from 'react'


function Test() {
    let a = new Array(10000).fill(0)
    let [name, setName] = useState('')
    let [isPending, startTransition] = useTransition()
    let state = useDeferredValue(name);
    return(
        <div className="App">
            <input onChange={ (e) => {
                // 혁신이다..
                // startTransition( () => {
                //     setName(e.target.value)
                // }) 
                setName(e.target.value)
            }} />
            {/* {isPending && <h1>please wait.</h1>} */}
            {a.map( () => {
                return (
                    <div>{state}</div>
                )
            })}
        </div>
    )
}

export default Test;