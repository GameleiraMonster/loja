import styles from './CadastroProduto.module.css'
import FormProduto from '../EstructForm/FormProduto'

function CadastroProduto (){
    return(
        <div>
            <h1>Cadastrar Produto</h1>
            <FormProduto btnText="Cadastrar"/>
        </div>
    )
}

export default CadastroProduto