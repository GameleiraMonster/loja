import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './FormProduto.module.css'

function FormProduto({ btnText }) {
    return (
        <form className={styles.form}>
            <Input
                type="number"
                text="Codigo do Produto"
                name="number"
                placeholder="Insira o codigo do produto" />

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
                type="number"
                text="Preço de compra"
                name="number"
                placeholder="Insira o preço de compra" />    
            <Input
                type="number"
                text="Preço de Venda"
                name="number"
                placeholder="Insira o preço de venda" />    

            <Input
                type="text"
                text="Descrição"
                name="Endereço"
                placeholder="Insira a descrição do produto" />    

            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormProduto