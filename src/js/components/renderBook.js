export const renderBook = book => {
    const div = document.createElement("div");
    div.className = "bg-components rounded-xl min-h-7 leading-5 px-1 py-2";
    div.innerText = `${book.title} | ${book.author}`;
    return div;
}