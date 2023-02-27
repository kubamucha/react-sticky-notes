import { Fragment, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import './App.css';

function App() {
    const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const [notes, setNotes] = useState(initialNotes);

    const addNoteHandler = note => {
        setNotes(prevState => [...prevState, note]);
    };

    const deleteNoteHandler = noteId => {
        setNotes(prevState => prevState.filter(note => note.noteId !== noteId));
    };

    const deleteAllHandler = () => {
        setNotes([]);
    };

    useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

    const outletCtx = {
        onAddNote: addNoteHandler,
        onDeleteNote: deleteNoteHandler,
        notes: notes,
    };

    return (
        <Fragment>
            <MainHeader onDeleteAll={deleteAllHandler} />
            <Outlet context={outletCtx} />
        </Fragment>
    );
}

export default App;
