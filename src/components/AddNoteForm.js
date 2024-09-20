import React, { useState } from "react";
import CharacterCounter from "./CharacterCounter";

function AddNoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLeft, setCharLeft] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value.slice(0, 50);
    setTitle(newTitle);
    setCharLeft(50 - newTitle.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Judul Catatan"
        required
      />
      <CharacterCounter charLeft={charLeft} />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi Catatan"
        required
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

export default AddNoteForm;
