import { useState } from "react";

export const Counter = () => {
    const [inputdata, setdata] = useState(0)
    // const count = 0;
    const increnum = () => {

        setdata(inputdata + 1)

    }

    const decnum = () => {
        if (inputdata > 0) {
            setdata(inputdata - 1)
        } else {

            setdata(0)
            alert("!!!!Number cannot be negative!!!!")
        }
    }

    return (
        <div className="Main-div">
            <div className="counterdiv">
                <h3 className="headcount">Counter:{inputdata}</h3>

                <div className="buttondiv">
                    <button onClick={increnum} className="pulse">Increment</button>
                    <button onClick={decnum} className="pulse">Decrement</button>
                </div>
            </div>
        </div>
    );
};
