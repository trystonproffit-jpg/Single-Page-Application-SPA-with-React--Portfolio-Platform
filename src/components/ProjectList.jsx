import ProjectItem from "./ProjectItem.jsx";

function ProjectList({ projects, onDelete }) {
    return (
        <>
            {projects.map(project => (
                <ProjectItem key={project.id} project={project} onDelete={onDelete} /> 
            ))}
        </>
    );
}

export default ProjectList;