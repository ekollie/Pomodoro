import React, { useState } from "react"
import Timer from "./Timer"

function TextEditor() {

    const [editorContent, setEditorContent] = useState("")
    const [charCount, setCharCount] = useState(0)
    const [totalChars, setTotalChars] = useState(0)
    const [efficiency, setEfficiency] = useState(0)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(editorContent)
        /*POST REQUEST FOR A SEQUENCE + PATCH REQUEST FOR CONTENT UPDATE*/
        /*CREATE A FUNCTION THAT WILL TRIGGER ROUTE TO GAME*/
        /*handleSubmit should be invoked by timer expiration*/

        /*key down counter needs separate state*/
        /*measuring efficiency by finding difference between total keystrokes & character length of final*/
    }

    function handleChange(event) {
        event.preventDefault()
        setEditorContent(event.target.value) /*keep*/
        setCharCount((prevCount) => prevCount + 1)
        setTotalChars(event.target.value.length)
        setEfficiency((totalChars / charCount) * 100) /*keep*/
    }

    return (
        <div>
            <Timer />
            <h1>Text Editor</h1>
            <form onSubmit={handleSubmit} >
                <textarea value={editorContent} onChange={handleChange} rows="30" cols="90" id="project-content" name="project-content"></textarea>
                {/*REMOVE BUTTON LATER -- REPLACE WITH TIMER*/}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TextEditor