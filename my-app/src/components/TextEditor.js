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
  const navigate = useNavigate();
  const { state } = useLocation();

  const { id, content, name } = state;
  const [editorContent, setEditorContent] = useState("");
  const [keyCount, setKeyCount] = useState(0);
  const [totalCharLength, setTotalCharLength] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [startingCharLength, setStartingCharLength] = useState(0);
  const [newName, setNewName] = useState(name);
  const projUrl = "http://localhost:3001/projects";
  const seqUrl = "http://localhost:3001/sequences";

  // console.log(new Date().toISOString().split("T")[0]);

  useState(() => {
    fetch(projUrl)
      .then((res) => res.json())
      .then((projects) => {
        let currProject = projects.find((project) => {
          return project.id === id;
        });
        setEditorContent(currProject.content);
        setStartingCharLength(currProject.content.length);
        console.log(currProject.content.length);
      });
  }, []);

  function handleSubmit() {
    /*POST REQUEST FOR A SEQUENCE + PATCH REQUEST FOR CONTENT UPDATE*/
    setKeyCount((prevCount) => prevCount + 1);
    setTotalCharLength(editorContent.length);

    const currentTotalCharLength = editorContent.length - startingCharLength;
    /*we may need to add an if statement here - tyler tested a few use cases that bugged*/
    const currentEfficiency =
      0 + Math.floor((currentTotalCharLength / keyCount) * 100);
    setEfficiency(currentEfficiency);

    console.log(currentTotalCharLength);

    const newSequence = {
      id: "",
      project_id: id,
      efficiency: currentEfficiency,
      duration_seconds: initialTime,
      character_count: keyCount,
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
      body: JSON.stringify({
        name: newName,
        content: editorContent,
        category: getBorderColor(),
      }),
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
    setKeyCount((prevCount) => prevCount + 1);
    // keep for sequence
    //
  }

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNavigate() {
    navigate("/snake", {
      state: { id },
    });
  }

  useEffect(() => {
    if (isActive && seconds === 0) {
      handleSubmit();
      handleNavigate();
    }
  }, [isActive, seconds, navigate]);
  const [select, setSelect] = useState("white");

  const handleSelectChange = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
    getBorderColor();
  };

  const getBorderColor = () => {
    switch (select) {
      case "coding":
        return "red";
      case "writing":
        return "blue";
      case "creative":
        return "yellow";
      default:
        return "white"; // or a default color
    }
  };
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
      <h3>Project Title:</h3>
      <input
        style={{ border: `2px solid ${getBorderColor()}` }}
        onChange={handleNameChange}
        id="projectName--editor"
        value={newName}
      />
      <div>
        <form onSubmit={handleSubmit}>
          <select
            id="select"
            onChange={handleSelectChange}
            value={select}
            style={{ border: `2px solid ${getBorderColor()}` }}
          >
            <option name="Select Category">Select Category</option>
            <option name="coding" value="coding">
              Coding
            </option>
            <option name="writing" value="writing">
              Writing
            </option>
            <option name="creative" value="creative">
              Creative
            </option>
          </select>
          <button id="colorButton">Confirm</button>
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ border: `2px solid ${getBorderColor()}` }}
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
