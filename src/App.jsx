import { useState } from "react";
import ProjectList from "./components/ProjectList";

function App() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Project 1", description: "Project Description"},
        { id: 2, title: "Project 2", description: "Project Description"}
    ]);    

    return (
        <div>
            <h1>Project Showcase App</h1>

            <ProjectList projects={projects} />
            
        </div>
    );
}

export default App;