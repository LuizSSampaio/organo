import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import Team from "./components/team";

const App = () => {
    const [collaborators, setCollaborators] = useState([]);

    const newCollaborator = (collaborator) => {
        setCollaborators([...collaborators, collaborator]);
        console.log(collaborator);
    }

    return (
        <div>
            <Banner />
            <Form addCollaborator={collaborator => newCollaborator(collaborator)}/>
            <Team name="Programação"/>
            <Team name="Front-End"/>
            <Team name="Data Science"/>
            <Team name="Devops"/>
            <Team name="UX e Design"/>
            <Team name="Mobile"/>
            <Team name="Inovação e Gestão"/>
        </div>
    );
}

export default App;
