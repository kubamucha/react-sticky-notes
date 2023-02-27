import { FiX, FiCheck } from 'react-icons/fi';
import { useOutletContext } from 'react-router-dom';
import classes from './Note.module.scss';

const Note = ({ id, noteHeader, noteBody }) => {
    const { onDeleteNote } = useOutletContext();

    let style;
    switch (noteHeader) {
        case 'Shopping':
            style = `${classes.note} ${classes.yellow}`;
            break;
        case 'Work':
            style = `${classes.note} ${classes.red}`;
            break;
        case 'House':
            style = `${classes.note} ${classes.blue}`;
            break;
        case 'Other':
            style = `${classes.note} ${classes.green}`;
            break;
    }

    const deleteNoteHandler = () => {
        onDeleteNote(id);
    };

    const noteCompletedHandler = e => {
        const completedNote = e.target.closest(`.${classes.note}`);
        completedNote.classList.toggle('completed');
    };

    return (
        <div className={style} id={id}>
            <div className={classes.note__header}>
                <h3 className={classes.note__title}>{noteHeader}</h3>
                <div className={classes.note__actions}>
                    <button
                        className={classes.note__btn}
                        onClick={noteCompletedHandler}
                    >
                        <FiCheck className="icon" />
                    </button>
                    <button
                        className={classes.note__btn}
                        onClick={deleteNoteHandler}
                    >
                        <FiX className="icon" />
                    </button>
                </div>
            </div>
            <div className={classes.note__body}>
                <p>{noteBody}</p>
            </div>
        </div>
    );
};

export default Note;
