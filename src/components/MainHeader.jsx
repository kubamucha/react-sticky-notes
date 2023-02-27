import NavList from './NavList';
import { FiFileText } from 'react-icons/fi';
import classes from './MainHeader.module.scss';

const MainHeader = ({ onDeleteAll }) => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <FiFileText />
                React Sticky Notes
            </h1>
            <NavList onDeleteAll={onDeleteAll} />
        </header>
    );
};

export default MainHeader;
