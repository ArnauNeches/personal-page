import { renderProject } from "./components/renderProject.js";

export async function renderProjects() {

    const response = await fetch("src/data/projects.json");
    const projects = await response.json();
    const container = document.getElementById("project-container");

    for (const project of Object.values(projects.data)) {
        const node = renderProject(project);
        container.appendChild(node);
    }
}