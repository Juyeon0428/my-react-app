const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  title.classList.toggle("red");
});