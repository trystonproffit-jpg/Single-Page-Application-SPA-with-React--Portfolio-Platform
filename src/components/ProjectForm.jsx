import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [github, setGithub] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!title.trim()) return;

        onAddProject({ title, description });

        setTitle("");
        setDescription("");
        setGithub("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    label="Project Description"
                    variant="outlined"
                    multiline
                    rows={3}
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
               
                <TextField
                    label="GitHub Link"
                    variant="outlined"
                    fullWidth
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                >
                    Add Project
                </Button>
            </Stack>
        </form>
    );
}

export default ProjectForm;