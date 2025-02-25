import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";

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
    <div style={styles.container}>
      <h1 style={styles.h1}>
        Notepad
        <EditNoteIcon style={styles.notesicon} />
      </h1>

      <input
        type="text"
        placeholder="Add a new note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />
      <div style={styles.notesContainer}>
        {notes.map((note, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.noteText}>
              {note.charAt(0).toUpperCase() + note.slice(1)}
            </div>
            <DeleteOutlineIcon
              style={styles.deleteIcon}
              onClick={() => deleteNote(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Textarea;

// Styles for the component
const styles = {
  h1: {
    backgroundColor: "beige",
    height: "45px",
    width: "35%",
    textAlign: "center",
    border: "1px solid white",
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#B7B1F2",
    height: "500px",
  },
  input: {
    width: "300px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid black",
    outline: "none",
    height: "140px",
    textAlign: "center",
    marginTop: "40px",
  },
  notesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "pink",
    border: "1px solid white",
    borderRadius: "8px",
    padding: "15px",
    width: "200px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontSize: "14px",
    position: "relative",
  },
  noteText: {
    marginBottom: "10px",
  },
  deleteIcon: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
    cursor: "pointer",
    color: "red",
  },
  notesicon: {
    color: "black",
    fontSize: "40px",
    marginLeft: "10px",
  },
};
