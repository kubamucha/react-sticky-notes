import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.scss';

const Modal = props => {
    const navigate = useNavigate();

    const closeModalHandler = () => {
        navigate('..');
    };
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={closeModalHandler} />
            <div className={classes.modal__wrapper}>
                <div className={classes.modal}>{props.children}</div>
            </div>
        </Fragment>
    );
};

export default Modal;
