import { useState, useEffect } from "react"
// import "./showdata.css"
export const ShowData = () => {
    const [formdata, setFormData] = useState([])

    const getData = async () => {
        const res = await fetch("http://localhost:8080/FORMDATA").then((d) => d.json())
        console.log(res)
        setFormData(res)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {formdata.map((e) => {
                console.log(e.username, "e.username")
                return <table>
                    <tr>
                        <th>username</th>
                        <th>age</th>
                        <th>address</th>
                        <th>depart</th>
                        <th>salary</th>
                        <th>status</th>
                    </tr>
                    <tr>
                        <td>{e.username}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.depart}</td>
                        <td>{e.salary}</td>
                        <td>{e.status}</td>
                    </tr>
                </table>
            })}
        </div>
    )
}





// export const getData = async () => {
//     const res = await fetch("http://localhost:8080/TODOREG").then((d) => d.json())
//     setreginput(res)
// }