import { useState } from "react";
export const TodoItems = ({ getData }) => {
    const [text, setText] = useState("");
    return (
        <div>
            <input
                onChange={(e) => {
                    console.log(e.target.value);
                    setText(e.target.value);
                }}
                type="text"
                placeholder="Enter Todo"
            />

            <button
                onClick={() => {
                    getData(text);
                    console.log("getdata",getData)
                }}

            >

                Add Todo
            </button>
            {/* <div>{text}</div> */}
        </div>
    );
};
