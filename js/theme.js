const html = document.querySelector("html");
const themeLightButton = document.getElementById("theme-light");
const themeDarkButton = document.getElementById("theme-dark");

function changeTheme(theme) {
    html.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
}

themeLightButton.addEventListener("click", function () {
    changeTheme("light");
    themeLightButton.classList.add("active");
    themeDarkButton.classList.remove("active");
});

themeDarkButton.addEventListener("click", function () {
    changeTheme("dark");
    themeDarkButton.classList.add("active");
    themeLightButton.classList.remove("active");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    changeTheme(savedTheme);
    if (savedTheme === "light") {
        themeLightButton.classList.add("active");
        themeDarkButton.classList.remove("active");
    } else if (savedTheme === "dark") {
        themeDarkButton.classList.add("active");
        themeLightButton.classList.remove("active");
    }
}