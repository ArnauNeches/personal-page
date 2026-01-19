export function initVersionSelector() {
    const selector = document.getElementById('version-select');
    if (!selector) return;

    selector.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        if (!selectedValue || selectedValue === "current") {
            return;
        }
        window.location.href = selectedValue;
    });
}