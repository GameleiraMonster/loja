import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Form.module.css'

function Form({ btnText }) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do cliente"
                name="name"
                placeholder="Insira o nome do cliente" />

            <Input
                type="text"
                text="Sobrenome"
                name="name"
                placeholder="Insira o sobrenome do cliente" />

            <Input
                type="number"
                text="CPF"
                name="number"
                placeholder="Insira o CPF do cliente" />

            <Input
                type="email"
                text="Email"
                name="Email"
                placeholder="Insira o email do cliente" />

            <Input
                type="tel"
                text="Telefone"
                name="tel"
                placeholder="Insira o telefone do cliente" />

            <Input
                type="text"
                text="Endereço"
                name="Endereço"
                placeholder="Insira o endereço do cliente" />

            <Input
                type="text"
                text="Logradouro"
                name="logradouro"
                placeholder="Insira o logradouro" />

            <Input
                type="number"
                text="CEP"
                name="number"
                placeholder="Insira o cep do cliente" />

            <Input
                type="text"
                text="Cidade"
                name="text"
                placeholder="Insira a cidade " />

            <Input
                type="text"
                text="Ponto de referencia"
                name="text"
                placeholder="Insira o ponto de referencia do cliente" />
                
            <SubmitButton text={btnText} />
        </form>
    )
}

export default Form