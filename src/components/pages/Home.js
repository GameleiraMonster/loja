import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo a <span>Loja</span></h1>
            <p>Selecione a opçaõ desejada!</p>
            <LinkButton to="/CadastroCliente" text="Cadastrar Novo Cliente" />
       </section>
    )
}

export default Home