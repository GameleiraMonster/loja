import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo a <span>Loja</span></h1>
            <p>Selecione a opçaõ desejada!</p>
            <LinkButton to="/CadastroCliente" text="Cadastrar Novo Cliente" />
            <br/><br/>
            <LinkButton to="/CadastroFornecedor" text="Cadastrar Novo Fornecedor" />
            <br/><br/>
            <LinkButton to="/CadastroFuncionario" text="Cadastrar Novo Funcionario" />
            <br/><br/>
            <LinkButton to="/CadastroProduto" text="Cadastrar Novo Produto" />
            <br/><br/>
            <LinkButton to="/FormularioPedido" text="Realizar pedido" />
       </section>
    )
}

export default Home