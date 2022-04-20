import { UseState } from "react"

export const Counter = () => {
    const [counter, setcounter] = useState(0)



    const handleclick1 = () => {
        setcounter(counter + 1)
    }
    return (
        <div>
            <h3>Counter:{counter}</h3>
            <button onClick={handleclick1}></button>
        </div>
    )

}