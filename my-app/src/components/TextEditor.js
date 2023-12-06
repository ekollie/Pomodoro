import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Timer from "./Timer";

function TextEditor({
  isActive,
  setIsActive,
  seconds,
  setSeconds,
  initialTime,
}) {
  const [editorContent, setEditorContent] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const projUrl = "http://localhost:3001/projects";
  const seqUrl = "http://localhost:3001/sequences";
  const navigate = useNavigate();

  const { state } = useLocation();
  const { id, content, name } = state;
  console.log(new Date().toISOString().split("T")[0]);

  useState(() => {
    setEditorContent(content);
  }, [state]);

  function handleSubmit() {
    /*POST REQUEST FOR A SEQUENCE + PATCH REQUEST FOR CONTENT UPDATE*/
    setCharCount((prevCount) => prevCount + 1);
    const newSequence = {
      id: "",
      project_id: id,
      efficiency: efficiency,
      duration_seconds: 1500,
      character_count: charCount,
      date: new Date().toISOString().split("T")[0],
    };
    fetch(seqUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newSequence),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
      } else {
        console.log("POST error");
      }
    });

    /*PATCH REQUEST FOR CONTENT UPDATE*/
    fetch(`${projUrl}/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ content: editorContent }),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
      } else {
        console.log("PATCH error");
      }
    });
  }

  function handleChange(event) {
    event.preventDefault();
    setIsActive(true);
    setEditorContent(event.target.value); /*keep*/
    setCharCount((prevCount) => prevCount + 1);
    // keep for sequence
    // setEfficiency((totalChars / charCount) * 100)
    // setTotalChars(event.target.value.length)
  }

  useEffect(() => {
    if (isActive && seconds === 0) {
      handleSubmit();
      navigate("/snake");
    }
  }, [isActive, seconds, navigate]);

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
      <h1>{name}</h1>
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
