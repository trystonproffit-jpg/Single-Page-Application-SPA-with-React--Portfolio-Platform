import { useState } from "react";
import ProjectList from "./components/ProjectList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";

function App() {
    const [projects, setProjects] = useState([
        { id: 1, title: "AI-Powered Chatbot", description: "Developed a conversational AI chatbot using GPT technology, capable of handling customer support queries and providing personalized responses."},
        { id: 2, title: "Mobile Game Prototype", description: "Created a mobile game prototype in Unity with C#, featuring dynamic levels and an intuitive user interface."}
    ]);   
  
  const [searchTerm, setSearchTerm] = useState("");  
  
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
    return (      
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Project Showcase!
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Add Project
          </Typography>

          <ProjectForm onAddProject={addProject} />
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Divider sx={{ my: 2 }} />

          <ProjectList projects={filteredProjects} onDelete={deleteProject} />
        </Paper>
      </Container>
    );
}

export default App;