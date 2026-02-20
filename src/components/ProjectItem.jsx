import { Card, CardContent, IconButton, Typography, Stack, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ project, onDelete }) {
    return (
        <Card sx={{ mb: 2, transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold">
                    {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {project.description}
                </Typography>

                <Stack direction="row" spacing={1}>
                    {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener">
                            <IconButton color="primary">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                    )}
                    {onDelete && (
                        <IconButton color="error" onClick={() => onDelete(project.id)}>
                            <DeleteIcon />
                        </IconButton>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ProjectItem;