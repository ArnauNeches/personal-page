export function lazyVideos() {
    const container = document.getElementById("video-container");
    if (!container) return;

    container.addEventListener("click", (event) => {

        const button = event.target.closest("button[data-id]");
        if (!button || !container.contains(button)) return;

        const videoId = button.dataset.id;
        if (!videoId || button.dataset.loaded == "true") return;

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.className = "w-full h-full border-none";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        button.dataset.loaded = "true";
        button.innerHTML = "";
        button.appendChild(iframe);
    });
}