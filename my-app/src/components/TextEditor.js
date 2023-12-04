import React, { useState } from "react"

function TextEditor() {

    const [editorContent, setEditorContent] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        console.log(editorContent)
        /*POST REQUEST FOR A SEQUENCE + PATCH REQUEST FOR CONTENT UPDATE*/
        /*CREATE A FUNCTION THAT WILL TRIGGER ROUTE TO GAME*/
        /*handleSubmit should be invoked by timer expiration*/
    }

    function handleChange (event) {
        event.preventDefault()
        setEditorContent(event.target.value)
    }

    return (
        <div>
            <h1>Text Editor</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={editorContent} onChange={handleChange} rows="30" cols="90" id="project-content" name="project-content"></textarea>
                {/*REMOVE BUTTON LATER -- REPLACE WITH TIMER*/}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TextEditor