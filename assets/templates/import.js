function establecerTema() {
  const tema = String(
    window.matchMedia("(prefers-color-scheme: dark)").matches, //ia
  );
  fetch("/download-apps/assets/templates/tags.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("theme").innerHTML = data;
    });
}
document.addEventListener("DOMContentLoaded", establecerTema); //ia
