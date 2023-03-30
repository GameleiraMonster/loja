import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './FormPedido.module.css'

function FormPedido({ btnText }) {
    return (
        <form className={styles.form}>
            
            <Select name="category_id" text="Selecione o fornecedor" />

            <Input
                type="text"
                text="Nome do Produto"
                name="name"
                placeholder="Insira o nome do produto" />
        
            <Input
                type="number"
                text="Quantidade"
                name="number"
                placeholder="Insira a Quantidade de produtos" />  

            <Input
                type="text"
                text="Descrição"
                name="Endereço"
                placeholder="Insira a descrição do produto" />    

            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormPedido