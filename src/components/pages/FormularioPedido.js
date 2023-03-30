import styles from './FormularioPedido.module.css'
import FormPedido from '../EstructForm/FormPedido'

function FormularioPedido (){
    return(
        <div>
            <h1>Realizar Pedido</h1>
            <FormPedido btnText="Cadastrar"/>
        </div>
    )
}

export default FormularioPedido