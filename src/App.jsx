import { useState } from "react";
import Banner from "./components/banner";
import Form from "./components/form";
import Team from "./components/team";

const App = () => {
    const [collaborators, setCollaborators] = useState([]);

    const newCollaborator = (collaborator) => {
        setCollaborators([...collaborators, collaborator]);
    };

    const teams = [
        {
            name: "Programação",
            primaryColor: "#57c278",
            secondaryColor: "#d9f7e9",
        },
        {
            name: "Front-End",
            primaryColor: "#82cffa",
            secondaryColor: "#e8f8ff",
        },
        {
            name: "Data Science",
            primaryColor: "#a6d157",
            secondaryColor: "#f0f8e2",
        },
        {
            name: "Devops",
            primaryColor: "#e06b69",
            secondaryColor: "#fde7e8",
        },
        {
            name: "UX e Design",
            primaryColor: "#db6ebf",
            secondaryColor: "#fae9f5",
        },
        {
            name: "Mobile",
            primaryColor: "#ffba05",
            secondaryColor: "#fff5d9",
        },
        {
            name: "Inovação e Gestão",
            primaryColor: "#ff8a29",
            secondaryColor: "#ffeedf",
        },
    ];

    return (
        <div>
            <Banner />
            <Form
                teams={teams.map(team => team.name)}
                addCollaborator={(collaborator) =>
                    newCollaborator(collaborator)
                }
            />
            {teams.map((team) => (
                <Team
                    key={team.name}
                    name={team.name}
                    primaryColor={team.primaryColor}
                    secondaryColor={team.secondaryColor}
                    collaborators={collaborators.filter( collaborator => collaborator.team === team.name)}
                />
            ))}
        </div>
    );
};

export default App;
