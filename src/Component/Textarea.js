import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import "./textarea.css";

function Textarea() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      setNotes((prevNotes) => [...prevNotes, text]);
      setText("");
    }
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((notes, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="h1">
        Notepad
        <EditNoteIcon className="notesicon" />
      </h1>

      <input
        type="text"
        placeholder="Add a new note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input"
      />
      <div className="notesContainer">
        {notes.map((note, index) => (
          <div key={index} className="card">
            <div className="noteText">
              {note.charAt(0).toUpperCase() + note.slice(1)}
            </div>
            <DeleteOutlineIcon
              className="deleteIcon"
              onClick={() => deleteNote(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Textarea;
