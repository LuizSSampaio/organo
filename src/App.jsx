import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";

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
        </div>
    );
}

export default App;
