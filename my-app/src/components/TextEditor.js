import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Timer from "./Timer";

function TextEditor() {
  const [editorContent, setEditorContent] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const urls = "http://localhost:3001/projects";
  const sequencesUrl = "http://localhost:3001/sequences";
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, content, name } = state;
  console.log(new Date().toISOString().split("T")[0]);

  useState(() => {
    setEditorContent(content);
  }, [state]);

  function handleTimerExpiration() {
    handleSubmit();
    /*This activates the route to the snake game once the clock expires*/
    navigate("/snake");
  }

  function handleSubmit() {
    /*POST REQUEST FOR A SEQUENCE + PATCH REQUEST FOR CONTENT UPDATE*/
    /*CREATE A FUNCTION THAT WILL TRIGGER ROUTE TO GAME*/
    /*handleSubmit should be invoked by timer expiration*/

    /*key down counter needs separate state*/
    /*measuring efficiency by finding difference between total keystrokes & character length of final*/

    // const newProject = {
    //     id: "",
    //     project_id: "",
    //     project_name: "",
    //     project_category: "",
    //     project_content: editorContent
    // }

    fetch(urls, +`/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ content: editorContent }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
        } else {
          console.log("Patch error");
        }
      })
      .then(() => {
        fetch(sequencesUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            project_id: id,
            efficiency: 0,
            duration_seconds: 0,
            character_count: 0,
            date: new Date().toISOString().split("T")[0],
          }),
        }).then((res) => {
          if (res.ok) {
            console.log(res);
          } else {
            console.log("Post error");
          }
        });
      });
  }

  function handleChange(event) {
    event.preventDefault();
    setEditorContent(event.target.value); /*keep*/
    setCharCount((prevCount) => prevCount + 1);
    // keep for sequence
    // setEfficiency((totalChars / charCount) * 100)
    // setTotalChars(event.target.value.length)
  }

  return (
    <div>
      <Timer
        isActive={isActive}
        setIsActive={setIsActive}
        onExpiration={handleTimerExpiration}
      />
      <h1>Text Editor for {name} </h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={editorContent}
          onChange={handleChange}
          rows="30"
          cols="90"
          id="project-content"
          name="project-content"
        ></textarea>
      </form>
    </div>
  );
}

export default TextEditor;
