import styles from './CadastroCliente.module.css'
import Form from '../EstructForm/Form'

function CadastroCliente (){
    return(
        <div >
            <h1>Cadastrar Cliente</h1>
            <Form btnText="Adicionar" />

        </div>
    )
}

export default CadastroCliente