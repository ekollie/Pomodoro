import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Timer from "./Timer"

function TextEditor({isActive,setIsActive,seconds,setSeconds,initialTime}) {

    const [editorContent, setEditorContent] = useState("")
    const [charCount, setCharCount] = useState(0)
    const [totalChars, setTotalChars] = useState(0)
    const [efficiency, setEfficiency] = useState(0)

    const projUrl = "http://localhost:3001/projects"
    const seqUrl = "http://localhost:3001/sequences"
    const navigate = useNavigate()
    const tempProjId = 1

    useEffect(()=>{
        fetch(`${projUrl}/${tempProjId}`)
        .then(res => res.json())
        .then(proj => setEditorContent(proj.content))
    },[])

    // function handleTimerExpiration () {
    //     handleSubmit()
    //     /*This activates the route to the snake game once the clock expires*/
    //     /*CREATE A FUNCTION THAT WILL TRIGGER ROUTE TO GAME*/
    //     navigate("/snake")
    // }

    function handleSubmit() {
        /*POST REQUEST FOR A SEQUENCE + PATCH REQUEST FOR CONTENT UPDATE*/
        setCharCount((prevCount) => prevCount + 1)
        const newSequence = {
            id: "",
            project_id: tempProjId,
            efficiency: efficiency,
            duration_seconds: 1500,
            character_count: charCount,
            date: "2023-12-6"
        }
        fetch(seqUrl, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newSequence)
        })
        .then((res)=> {if(res.ok){console.log(res)} else {console.log("POST error")}})

        /*PATCH REQUEST FOR CONTENT UPDATE*/
        fetch(`${projUrl}/${tempProjId}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({content: editorContent})
        })
        .then((res)=> {if(res.ok){console.log(res)} else {console.log("PATH error")}})

        console.log("handleSubmit")

    }

    function handleChange(event) {
        event.preventDefault()
        setIsActive(true)
        setEditorContent(event.target.value) /*keep*/
        setCharCount((prevCount) => prevCount + 1)
        
        // keep for sequence
        // setEfficiency((totalChars / charCount) * 100)
        // setTotalChars(event.target.value.length)
    }

    useEffect(() => {
        if (isActive && seconds === 0) {
            handleSubmit()
            navigate("/snake")
        }
    },[isActive,seconds,navigate])

    return (
        <div>
            <Timer 
                isActive={isActive}
                setIsActive={setIsActive}
                onExpiration={handleSubmit}
                seconds={seconds}
                setSeconds={setSeconds}
                initialTime={initialTime}
            />
            <h1>Text Editor</h1>
            <form onSubmit={handleSubmit} >
                <textarea 
                    value={editorContent}
                    onChange={handleChange}
                    rows="30"
                    cols="90"
                    id="project-content"
                    name="project-content">
                </textarea>
            </form>
        </div>
    )
}

export default TextEditor