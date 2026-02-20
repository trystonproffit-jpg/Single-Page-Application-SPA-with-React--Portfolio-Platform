import { useState } from "react";
import ProjectList from "./components/ProjectList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";

function App() {
    const [projects, setProjects] = useState([
        { id: 1, title: "My First Trivia CLI Quiz", description: "I created a CLI Trivia quiz to get more experience in coding!", github: "https://github.com/trystonproffit-jpg/Sum-Lab-Trivia-CLI.git"},
        { id: 2, title: "A JavaScript Calculator That saves History", description: "A Basic calculator in JavaScript I created to learn some basic JavaScript functions!", github: "https://github.com/trystonproffit-jpg/Lab_1_Calculator.git"}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}
        >

        <Box
          sx={{
            px: 3,
            py: 1,
            border: "3px solid #4f46e5",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #4f46e5, #ec4899)",
          }}
        >  
   
          <Typography
          variant="h3" 
          component="h1" 
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            textAlign: "center",
              }}
          >
            Project Showcase!
          </Typography>
        </Box>
        </Box>
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