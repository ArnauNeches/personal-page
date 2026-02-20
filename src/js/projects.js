import { renderProject } from "./components/renderProject.js";
import { supabase } from "./utils/supabaseClient.js";

export async function renderProjects() {

    const { data: projects, error } = await supabase.from('projects').select('*');

    if (error) {
        console.error("Error fetching projects:", error);
        return;
    }

    const container = document.getElementById("project-container");

    for (const project of projects) {
        const node = renderProject(project);
        container.appendChild(node);
    }
}