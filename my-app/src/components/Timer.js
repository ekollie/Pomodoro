import React, { useEffect, useState, useRef } from "react"

function Timer ({
    isActive,
    setIsActive,
    handleSubmit,
    seconds,
    setSeconds,
    initialTime
}) {
    /*created a separate variable in case we want to allow users to set their own times*/
    /*Right now its hard-coded for 25 mins*/

    const intervalRef = useRef(null)

    useEffect(()=> {
        if (isActive && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1
                    } else {
                        clearInterval(intervalRef.current)
                        handleSubmit()
                        return prevSeconds
                    }
                })
            }, 1000)
        } else if ((seconds === 0 || !isActive) && intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        return () => {
            clearInterval(intervalRef.current)
        }
    },[isActive, seconds, handleSubmit, setSeconds])

    function resetTimer () {
        setSeconds(initialTime)
        setIsActive(false)
    }

    function toggleTimer() {
        setIsActive((prev) => !prev)
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