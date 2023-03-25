import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'


function NavBar (){
    return(
        
            <Container>
                <nav className={styles.navbar}>
                    <h1>Loja</h1>
                </nav>
            </Container>
       
    )
}

export default NavBar