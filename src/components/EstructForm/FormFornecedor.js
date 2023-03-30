import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './FormFornecedor.module.css'

function FormFornecedor({ btnText }) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Razão Social"
                name="name"
                placeholder="Razão social da empresa" />

            <Input
                type="text"
                text="Nome Fantasia"
                name="name"
                placeholder="Nome fantasia da empresa" />

            <Input
                type="number"
                text="CNPJ"
                name="number"
                placeholder="CNPJ da empresa" />

            <Input
                type="number"
                text="Inscrição Estadual"
                name="number"
                placeholder="Inscrição Estadual da Empresa" />

            <Input
                type="number"
                text="Inscrição Municipal"
                name="number"
                placeholder="Inscrição Municipal da Empresa" />

            <Input
                type="text"
                text="Endereço"
                name="Endereço"
                placeholder="Endereço da empresa" />

            <Input
                type="number"
                text="CEP"
                name="number"
                placeholder="CEP da empresa" />

            <Input
                type="text"
                text="Cidade"
                name="text"
                placeholder="Cidade onde situa-se a empresa" />

            <Input
                type="text"
                text="Estado"
                name="text"
                placeholder="Estado onde situa-se a empresa" />    

            <Input
                type="email"
                text="Email"
                name="Email"
                placeholder="Insira o email da empresa" />

            <Input
                type="tel"
                text="Telefone"
                name="tel"
                placeholder="Insira o telefone da empresa" />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormFornecedor