import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function Challenge({title, targetTime}){
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, settimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000 )

        settimerStarted(true);
    }
    
    function handleStop() {
        clearTimeout(timer.current)
    }
    return(
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
        <section className="challenge">
            <h2>{title}</h2> 
            {timerExpired && <p>You lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop ' : 'Start '} challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
               {timerStarted ? 'Time is running' : 'Timer inactive'}  
            </p>
        </section>
        </>
    )
}