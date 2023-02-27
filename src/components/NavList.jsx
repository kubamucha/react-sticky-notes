import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { FiEdit, FiTrash } from 'react-icons/fi';
import classes from './NavList.module.scss';

const NavList = ({ onDeleteAll }) => {
    const navigate = useNavigate();

    const onDeleteAllNotes = () => {
        onDeleteAll()
        navigate('..');
    };

    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.nav__item}>
                    <Link to="/add-note" className={`${classes.nav__btn} ${classes['nav__btn--add']} btn primary-btn`}>
                        <FiEdit className="icon" />
                        <span className={classes['nav__btn--text']}>Add Note</span>
                    </Link>
                </li>
                <li className={classes.nav__item}>
                    <button className={`${classes.nav__btn} ${classes['nav__btn--delete']} primary-btn`} onClick={onDeleteAllNotes}>
                        <FiTrash className="icon" />
                        <span className={classes['nav__btn--text']}>Delete All</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default NavList;
