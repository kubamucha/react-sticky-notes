import { Fragment } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Note from '../components/Note';
import classes from './NotesList.module.scss';

const NotesList = () => {
    const outletCtx = useOutletContext();

    return (
        <Fragment>
        <Outlet context={outletCtx} />
        <main className={classes['notes-area']}>
            {outletCtx.notes.length > 0 && outletCtx.notes.map(note => (
                <Note key={note.noteId} id={note.noteId} noteHeader={note.noteHeader} noteBody={note.noteText} onDelete={outletCtx} />
            ))}
            {outletCtx.notes.length === 0 && <p className={classes['no-notes-msg']}>No notes yet. Write some!</p>}
        </main>
        </Fragment>
    );
};

export default NotesList;
