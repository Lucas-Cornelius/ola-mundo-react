import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    return (
        <NavLink className={ styles.link } to={to}>
            {children}
        </NavLink>
    )
};