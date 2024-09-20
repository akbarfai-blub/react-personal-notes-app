import React from "react";
import NoteItem from "./NoteItem";

function ArchiveList({ notes, deleteNote, toggleArchive }) {
  if (notes.length === 0) {
    return <p>Tidak ada catatan di arsip</p>;
  }

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
      ))}
    </ul>
  );
}

export default ArchiveList;
