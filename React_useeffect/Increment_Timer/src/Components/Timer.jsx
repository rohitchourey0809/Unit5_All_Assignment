import { useEffect, useState } from "react"
export const TIMER = () => {
    const [seconds, setseconds] = useState(0);
    const [minutes, setminutes] = useState(0);

    var timer;

    useEffect(() => {
        timer = setInterval(() => {
            setseconds(seconds + 1);
            if (seconds === 59) {
                setminutes(minutes + 1);
                setseconds(0);
            }
        }, 1000);

        return () => clearInterval(timer);
    });


    const restart = () => {
        setseconds(0)
        setminutes(0)
    }

    const stop = () => {
        clearInterval(timer)
    }

    return (
        <div className="main_div">
            <div className="cont_div">
                <div className="Timerdiv">
                    <h2>
                        <span className="timer">Timer</span>
                    </h2>
                    <h2>
                        <span className="minutes">{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>
                    </h2>
                    <button onClick={restart} className="offset">Restart</button>
                    <button onClick={stop} className="offset">Stop</button>
                </div>
            </div>
        </div>
    );
};
