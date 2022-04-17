import { useState } from "react";

export const FORM = () => {
    const [formdata, setFormData] = useState({
        username: "",
        age: "",
        address: "",
        depart: "",
        salary: "",
        status: "",
    });

    const handlechange = (e) => {
        //*const id = e.target.id;
        //*const value = e.target.value;
        //?destructuiring input data
        const { id, value } = e.target;

        setFormData({
            ...formdata,
            [id]: value,
        });

        console.log(e.target.id);

        // setFormData({
        //     ...formdata,
        //     [e.target.id] : e.target.value
        // })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);

        const payload = {
            username: formdata.username,
            age: formdata.age,
            address: formdata.address,
            depart: formdata.depart,
            salary: formdata.salary,
            status: formdata.status,
        }

        fetch("http://localhost:8080/FORMDATA", {
            method: "POST",
            // 
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payload)
        })
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handlechange}
                // value={formdata.username}
                id="username"
                type="text"
                placeholder="Enter Username"
            />

            <br />
            <input
                onChange={handlechange}
                // value={formdata.age}

                id="age"
                type="number"
                placeholder="Enter Age"
            />

            <br />
            <input
                onChange={handlechange}
                // value={formdata.age}
                id="address"
                type="text"
                placeholder="Enter Address"
            />

            <br />
            <select onChange={handlechange} id="depart">
                <option>Department</option>
                <option>software</option>
                <option> Operation</option>
            </select>

            <br />
            <input
                onChange={handlechange} id="salary" type="number" placeholder="Salary" />

            <br />
            <div>
                {" "}
                <input onChange={handlechange} id="status" type="checkbox" value="Married" />
                Married
            </div>

            <div>
                <input onChange={handlechange} id="status" type="checkbox" value="UnMarried" />
                Unmarried
            </div>

            <br />
            <input onChange={handlechange} type="submit" value="submit" />
        </form>
    );
};
