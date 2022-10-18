import "./style.css";
import TextField from "../textField";
import DropDown from "../dropdown";
import Button from "../button";
import { useState } from "react";

const Form = (props) => {
    const submit = (event) => {
        event.preventDefault();
        props.addCollaborator({
            name,
            role,
            image,
            team
        });
        setName("");
        setRole("");
        setImage("");
        setTeam("Programação");
    }

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("Programação");

    return (
        <section className="form-section">
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    value={name} 
                    onChange={value => setName(value)}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required
                />
                <TextField 
                    value={role} 
                    onChange={value => setRole(value)}
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required
                />
                <TextField 
                    value={image} 
                    onChange={value => setImage(value)}
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                />
                <DropDown
                    value={team}
                    onChange={value => setTeam(value)} 
                    label="Time" 
                    itens={props.teams} 
                    required
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

export default Form;