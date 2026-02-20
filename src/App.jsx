import { useState } from "react";
import ProjectList from "./components/ProjectList.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");  
  
  const [projects, setProjects] = useState([
        { id: 1, title: "Project 1", description: "Project Description"},
        { id: 2, title: "Project 2", description: "Project Description"}
    ]);    

    const filteredProjects = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Project Showcase App</h1>

            <ProjectList projects={filteredProjects} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    );
}

export default App;