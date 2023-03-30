import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/indice.png'

function NavBar() {
    return (
        <Container>
            <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="sacola"></img>
            </Link>
                
            </nav>
        </Container>

    )
}

export default NavBar