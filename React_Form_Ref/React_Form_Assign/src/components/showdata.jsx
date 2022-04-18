import { useState, useEffect } from "react"
// import "./showdata.css"
export const ShowData = () => {
    const [formdata, setFormData] = useState([])

    const getData = async () => {
        const res = await fetch("http://localhost:8080/FORMDATA").then((d) => d.json())
        setFormData(res)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {formdata.map((e) => {
                return <table>
                    <tr>

                        <th>username</th>
                        <th> age</th>
                        <th>address</th>
                        <th>depart</th>
                        <th>salary</th>
                        <th>status</th>
                        depart: "",
                        salary: "",
                        status: "",
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

