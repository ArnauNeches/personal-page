export function renderFooter() {
    const footer = document.createElement("div");
    footer.className = "max-w-7xl mx-auto px-6 py-14 box-border";

    footer.innerHTML = `
    <div class="flex flex-wrap flex-col lg:flex-row justify-around content-center gap-2">
        <div class="bg-components text-md">
            <a class="flex items-center gap-2 text-link hover:text-linkhover hover:underline transition-all visited:text-linkvisited" href="mailto:arnichi2103@gmail.com">
                <svg class="w-5 h-5 fill-current">
                    <use href="src/assets/svg/sprites.svg#email"></use>
                </svg>
                <span>arnichi2103@gmail.com</span>
            </a>
        </div>
        <div class="bg-components text-md">
            <a class="flex items-center gap-2 text-link hover:text-linkhover hover:underline transition-all visited:text-linkvisited" href="https://github.com/ArnauNeches">
                <svg class="w-5 h-5 fill-current">
                    <use href="src/assets/svg/sprites.svg#github"></use>
                </svg>
                <span>Github</span>
            </a>
        </div>
        <div class="bg-components text-md">
            <a class="flex items-center gap-2 text-link hover:text-linkhover hover:underline transition-all visited:text-linkvisited" href="https://www.linkedin.com/in/arnau-neches-vil%C3%A0-096627255/">
                <svg class="w-5 h-5 fill-current">
                    <use href="src/assets/svg/sprites.svg#linkedin"></use>
                </svg>
                <span>Linkedln</span>
            </a>
        </div>
    </div>
    `;

    return footer;
}