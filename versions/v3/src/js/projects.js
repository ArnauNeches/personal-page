import { renderProject } from "./components/renderProject.js";

export async function renderProjects() {

    const response = await fetch("src/data/projects.json");
    const projects = await response.json();

    for (const project of Object.values(projects.data)) {
        const container = document.getElementById(project.type);
        if (!container) continue;

        const node = renderProject(project);
        container.appendChild(node);
    }
}