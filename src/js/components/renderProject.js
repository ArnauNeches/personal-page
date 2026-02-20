export function renderProject(project) {

    const projectContainer = document.createElement("div");

    const projectTitle = document.createElement("h5");
    projectTitle.className = "text-titles font-bold text-md text-center";
    if (project.link) {
        const projectLink = document.createElement("a");
        projectLink.className = "text-link hover:text-linkhover hover:underline transition-all visited:text-linkvisited";
        projectLink.href = project.link;
        projectLink.innerText = project.Title;
        projectTitle.appendChild(projectLink);
    } else {
        projectTitle.innerText = project.Title;
    }
    projectContainer.appendChild(projectTitle);

    const projectDescription = document.createElement("p");
    projectDescription.innerText = project.description;


    projectContainer.className = "bg-components rounded-xl flex flex-col items-center p-4 m-2 justify-around min-h-44";
    projectDescription.className = "text-sm text-center pb-2";

    projectContainer.appendChild(projectDescription);
    
    if (project.github) {
        const projectGithub = document.createElement("a");
        projectGithub.className = "text-link hover:text-linkhover hover:underline transition-all visited:text-linkvisited"
        projectGithub.href = project.github;
        projectGithub.innerHTML = `
        <svg class="w-7 h-7 fill-current">
            <use href="src/assets/svg/sprites.svg#github"></use>
        </svg>
        `
        projectContainer.appendChild(projectGithub);
    }

    return projectContainer;
}