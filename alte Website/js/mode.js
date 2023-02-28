const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
  body.classList.add("dark-mode");
}