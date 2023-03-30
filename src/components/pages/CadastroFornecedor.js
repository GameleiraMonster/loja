import styles from './CadastroFornecedor.module.css'
import FormFornecedor from '../EstructForm/FormFornecedor'

function CadastroFornecedor (){
    return(
        <div>
            <h1>Cadastrar Fornecedor</h1>
            <FormFornecedor btnText="Cadastrar"/>
        </div>
    )
}

export default CadastroFornecedor