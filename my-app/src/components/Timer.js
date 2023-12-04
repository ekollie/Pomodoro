import React, { useEffect, useState } from "react"

function Timer () {
    const initialTime = 25*60
    const [seconds, setSeconds] = useState(initialTime)
    const [isActive, setIsActive] = useState(false)

    useEffect(()=> {
        let intervalId

        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds -1)
            }, 1000)
        } else if (seconds === 0) {
            clearInterval(intervalId)
        }

        return () => clearInterval(intervalId)
    },[isActive, seconds])
    function resetTimer () {
        setSeconds(initialTime)
        setIsActive(false)
    }

    function toggleTimer() {
        setIsActive(prev => !prev)
    }

    function formatTime (secs) {
        const minutes = Math.floor(secs / 60)
        const remainingSeconds = secs % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <div>
            <h1>Countdown Timer:</h1>
            <h2>{formatTime(seconds)}</h2>
            <button onClick={toggleTimer}>
                {isActive ? "Pause":"Start"}
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer