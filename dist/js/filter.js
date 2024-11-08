document.querySelector(".FilterButton").addEventListener("click", () => {
    document.querySelectorAll("img").forEach(image => {
    image.classList.toggle("filter");
    });
    console.log("Filter")
});
