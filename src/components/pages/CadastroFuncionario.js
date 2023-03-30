import styles from './CadastroFuncionario.module.css'
import FormFuncionario from '../EstructForm/FormFuncionario'

function CadastroFuncionario (){
    return(
        <div>
            <h1>Cadastrar Funcionario</h1>
            <FormFuncionario btnText="Cadastrar"/>
        </div>
    )
}

export default CadastroFuncionario