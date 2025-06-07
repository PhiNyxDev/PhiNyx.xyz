var theme = localStorage.getItem("theme") || "light";

function insertThemeLink() {
    let element = document.createElement("link");
    element.rel = "stylesheet";
    element.href = theme === "dark" ? "dark_theme.css" : "light_theme.css";
    document.head.insertBefore(element, document.head.children[0]);
}

function switchTheme() {
    document.head.removeChild(document.head.children[0]);
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    insertThemeLink();
    document.getElementById("theme-switch").innerText = theme === "dark" ? "🌕" : "☀️";
    let elements = document.getElementsByClassName("logo");
}

insertThemeLink();