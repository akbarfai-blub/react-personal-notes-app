import React, { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import ArchiveList from "./components/ArchiveList";
import initialNotes from "./utils/note";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="navbar-title">Catatan Pribadi</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Cari catatan..."
            className="search-bar"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>

      <AddNoteForm addNote={addNote} />

      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />

      <h2>Catatan Arsip</h2>
      <ArchiveList
        notes={filteredNotes.filter((note) => note.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default App;
