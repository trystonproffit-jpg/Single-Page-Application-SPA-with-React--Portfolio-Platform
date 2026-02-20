import { Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

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
                {onDelete && (
                    <IconButton color="error" onClick={() => onDelete(project.id)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </CardContent>
        </Card>
    );
}

export default ProjectItem;