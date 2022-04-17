import { useState } from "react"
import { Todocollection } from "./Todocollection"
import { TodoItems } from "./Todoitems";
import { nanoid } from "nanoid"

function Todo() {
    const [Todolist, setTodolist] = useState([])

    const getData = (todo) => {
        console.log("Received", todo)
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5)
        };
        setTodolist([...Todolist, payload])
    }

    const handlestatus = (id) => {
        console.log("id", id)
        //find this id from todolist
        //   toggle its status
        //get new array , sewt it again
        setTodolist(Todolist.map((e) => (e.id === id ? { ...e, status: !e.status } : e)))
    }

    return (<div className="headitem">
        <h3>!!Hello Welcome to Todo!!</h3>

        <TodoItems getData={getData}
        />

        {
            Todolist.map((e) => (
                <div className="listitem">
                    <Todocollection
                        handlestatu={handlestatus} todo={e}>
                    </Todocollection >
                </div>
            ))
        }

    </div>)
}

export { Todo }