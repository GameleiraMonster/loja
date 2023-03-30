import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './FormFuncionario.module.css'

function FormFuncionario({ btnText }) {
    return (
        <form className={styles.form}>
            <Select name="category_id" text="Selecione a categoria (Gerente ou Vendedor)" />

            <Input
                type="text"
                text="Nome do completo"
                name="name"
                placeholder="Insira o nome completo" />

            <Input
                type="date"
                text="Data de Nascimento"
                name="data"
                placeholder="Insira a data de nascimento do funcionario" />

            <Select name="category_id" text="Selecione o sexo" />

            <Input
                type="number"
                text="identidade"
                name="number"
                placeholder="Insira o nº de identidade" />
            
            <Input
                type="number"
                text="CPF"
                name="number"
                placeholder="Insira o CPF" />
            
            <Input
                type="text"
                text="Endereço"
                name="Endereço"
                placeholder="Insira o endereço do funcionario" />    

            <Input
                type="email"
                text="Email"
                name="Email"
                placeholder="Insira o email do funcionario" />

            <Input
                type="tel"
                text="Telefone"
                name="tel"
                placeholder="Insira o telefone do funcionario" />

            <Input
                type="text"
                text="Endereço"
                name="Endereço"
                placeholder="Insira o endereço do funcionario" />

            <Input
                type="text"
                text="Logradouro"
                name="logradouro"
                placeholder="Insira o logradouro" />

            <Input
                type="number"
                text="CEP"
                name="number"
                placeholder="Insira o cep" />

            <Input
                type="text"
                text="Cidade"
                name="text"
                placeholder="Insira a cidade " />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default FormFuncionario