        function establecerTema() {
            const tema = String(window.matchMedia('(prefers-color-scheme: dark)').matches);
            fetch("/download-apps/assets/themes/" + tema + ".css")
                .then(response => response.text())
                .then(data => {
                    document.getElementById('theme').innerHTML = data
                }
            );
        }
        document.addEventListener('DOMContentLoaded', establecerTema);