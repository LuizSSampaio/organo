import "./style.css";
import TextField from "../textField";
import DropDown from "../dropdown";

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

    return (
        <section className="form-section">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDown label="Time" itens={teams}/>
            </form>
        </section>
    );
}

export default Form;