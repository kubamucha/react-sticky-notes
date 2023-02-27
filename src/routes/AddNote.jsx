import { useState, useRef } from 'react';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import useInput from '../hooks/use-input';
import Modal from '../components/Modal';
import classes from './AddNote.module.scss';

const AddNote = () => {
    // const [formIsValid, setFormIsValid] = useState(true)
    const textRef = useRef();
    const selectRef = useRef();
    const navigate = useNavigate();
    const { onAddNote } = useOutletContext();

    const {
        value: selectValue,
        isValid: selectIsValid,
        hasError: selectHasError,
        valueChangeHandler: selectChangeHandler,
        inputBlurHandler: selectBlurHandler,
    } = useInput(value => value !== '0' && value !== '');

    const {
        value: textValue,
        isValid: textIsValid,
        hasError: textHasError,
        valueChangeHandler: textChangeHandler,
        inputBlurHandler: textBlurHandler,
    } = useInput(value => value !== '');

    let formIsValid = false;

    if (selectIsValid && textIsValid) {
        formIsValid = true;
    }

    const submitHandler = e => {
        e.preventDefault();

        if (!selectIsValid && !textIsValid) {
            return;
        }

        const noteHeader = selectRef.current[selectRef.current.value].text;
        const noteText = textRef.current.value;
        const noteId = (Math.random() * 10).toFixed(5);

        const note = {
            noteId,
            noteHeader,
            noteText,
        };

        onAddNote(note);

        navigate('..');
    };

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <h2 className={classes.form__title}>Add A Note</h2>
                <label className={classes.label} htmlFor="category">
                    Select category
                </label>
                <select className={classes.category} name="category" id="category" ref={selectRef} value={selectValue} onChange={selectChangeHandler} onBlur={selectBlurHandler}>
                    <option value="0">
                        – select category –
                    </option>
                    <option value="1">Shopping</option>
                    <option value="2">Work</option>
                    <option value="3">House</option>
                    <option value="4">Other</option>
                </select>
                {selectHasError && <p className={classes.error}>Select a category</p>}
                <label className={classes.label} htmlFor="text">
                    Write something
                </label>
                <textarea className={classes.text} name="text" id="text" cols="30" rows="10" ref={textRef} value={textValue} onChange={textChangeHandler} onBlur={textBlurHandler} />
                {textHasError && <p className={classes.error}>Write a note</p>}
                <div className={classes.actions}>
                    <Link to=".." className="btn">
                        Cancel
                    </Link>
                    <button disabled={!formIsValid} className="primary-btn">Add</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddNote;
