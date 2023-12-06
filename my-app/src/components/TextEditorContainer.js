import React, {useState} from "react"
import TextEditor from "./TextEditor"

function TextEditorContainer () {
    const initialTime = 5
    const [isActive, setIsActive] = useState(false)
    const [seconds, setSeconds] = useState(initialTime)

    return (
        <TextEditor
            isActive={isActive}
            setIsActive={setIsActive}
            seconds={seconds}
            setSeconds={setSeconds}
            initialTime={initialTime}/>
    )
}

export default TextEditorContainer