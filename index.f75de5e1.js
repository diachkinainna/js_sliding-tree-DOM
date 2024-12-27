"use strict";
const list = document.querySelectorAll("li");
for (const title of list)if (title.firstChild && title.firstChild.nodeType === 3) {
    const element = document.createElement("span");
    element.textContent = title.firstChild.textContent;
    title.firstChild.replaceWith(element);
}
document.addEventListener("click", (e)=>{
    const element = e.target.closest("span");
    const liElement = element.closest("li");
    if (liElement) {
        const children = liElement.querySelector("ul");
        if (children) children.style.display = children.style.display === "none" ? "" : "none";
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
