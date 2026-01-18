export function handleDarkMode() {
    const toggle = document.getElementById("dark-mode-toggle");
    const darkText = document.getElementById("dark-mode-text");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)){
        html.classList.add("dark");
        darkText.innerText = "Dark mode: On";
    } else {
        html.classList.remove("dark");
        darkText.innerText = "Dark mode: Off";
    }

    toggle.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            darkText.innerText = "Dark mode: Off";
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            darkText.innerText = "Dark mode: On";
        }
    });
}