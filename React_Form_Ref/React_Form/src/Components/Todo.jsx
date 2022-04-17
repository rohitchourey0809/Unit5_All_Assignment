import img1 from "../image/img1.png"
import "../App.css"
import { useState } from "react"

export const Todolist = () => {
    const [inputdata, setinputdata] = useState("")
    const [items, setItems] = useState([]);
    const additems = () => {
        if (!inputdata) {
            return
        } else {
            setItems([...items, inputdata])
            setinputdata("")
        }

        //It should be an array form
    }
    // addItem()

    // {Delete Items}
    const deleteItems = (id) => {
        console.log(id)
        const UpadtedItems = items.filter((elem, index) => {
            return index !== id;
        })
        setItems(UpadtedItems)
    }

    const removeall = () => {
        setItems([])
    }
    return (
        <div className="main-div">
            <div className="Tododiv">
                <figure className="todoimg">
                    <img src={img1} alt="todologo" />
                    <figcaption>
                        Add React Todo List Here
                    </figcaption>
                </figure>

                <div className="Additems">
                    Todo Items:<input
                        value={inputdata}
                        onChange={(e) => setinputdata(e.target.value)}

                        type="text" placeholder="Write Item Here" />
                    <button><i
                        onClick={(additems)}
                        className="fa fa-solid fa-plus" title="Add Items" aria-hidden="true"></i >Add Item</button>

                </div>


                <div clssName="showitem">
                    {/* <?-------Updated Itemss------? */}
                    {
                        items.map((elem, index) => {
                            return (
                                <div className="eachitem" key={index} >
                                    <h2>{elem}</h2>
                                    <button>
                                        Delete Items:<i
                                            onClick={() => deleteItems(index)} className='fa fa-trash fa-lg add-btn' title='Delete Item' ></i>
                                    </button>
                                </div>

                            )
                        })
                    }


                </div>


                {/* Clear all button */}
                <div className="showitem">
                    <button
                        onClick={removeall} className="btn effect04" data-sm-link-text="Remove All">
                        <span>Clear All</span></button>
                </div>

            </div>
        </div>
    )


}