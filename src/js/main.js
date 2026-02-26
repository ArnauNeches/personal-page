import { initBooksPage } from "./initBooksPage.js";
import { renderProjects } from "./projects.js";
import { renderFooter } from "./components/renderFooter.js";
import { handleDarkMode } from "./utils/toogleDarkMode.js";
import { lazyVideos } from "./utils/lazyVideos.js";
import { initVersionSelector } from "./utils/versionSelector.js";
import { CVDownload } from "./utils/cvTracker.js";

handleDarkMode();

const footerContainer = document.getElementById("footer");
if (footerContainer) footerContainer.appendChild(renderFooter());

if (document.getElementById("projects")) {
    renderProjects();
    CVDownload();
} else if (document.getElementById("read")) {
    await initBooksPage();
} else if (document.getElementById("demo")) {
    lazyVideos();
} else if (document.getElementById("versions")) {
    initVersionSelector();
}