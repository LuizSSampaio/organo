import "./style.css";
import TextField from "../textField";
import DropDown from "../dropdown";
import Button from "../button";

const Form = () => {
    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const submit = (event) => {
        event.preventDefault();
        console.log("O Formulário foi enviado");
    }

    return (
        <section className="form-section">
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome" required/>
                <TextField label="Cargo" placeholder="Digite seu cargo" required/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDown label="Time" itens={teams} required/>
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

export default Form;