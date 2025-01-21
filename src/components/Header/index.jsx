import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>PedroFliiix</span>
            </Link>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/Search"> Search </Link>
                <Link to="/Favorites"> Favorites </Link>
                <Link to="/VideoRegister"> Register Video </Link>
            </nav>
        </header>
    )
}

export default Header;
