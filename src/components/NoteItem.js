import React from "react";

function NoteItem({ note, deleteNote, toggleArchive }) {
  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>Dibuat pada: {new Date(note.createdAt).toLocaleString()}</p>
      <button onClick={() => toggleArchive(note.id)}>
        {note.archived ? "Pindahkan" : "Arsipkan"}
      </button>
      <button onClick={() => deleteNote(note.id)}>Hapus</button>
    </li>
  );
}

export default NoteItem;
