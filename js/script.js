document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            navLinks.forEach(nav => nav.classList.remove("active"));
            sections.forEach(section => {
                section.classList.remove("active");
                section.style.display = "none";
            });
          
            this.classList.add("active");
            const target = this.getAttribute("data-target");
            const targetSection = document.getElementById(target);
            targetSection.style.display = "block";
            setTimeout(() => {
                targetSection.classList.add("active");
            }, 10);
        });
    });
});
var click = document.getElementById("clicksound");

function clicksound() {
    click.play();
}

function checkServerStatus() {
    const address = "mc.servermc.xyz:10141";
    const apiUrl = `https://api.mcstatus.io/v2/status/bedrock/${address}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayStatus(data);
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
            document.getElementById('status-result').innerHTML = 'Error fetching server status.';
        });
}

function displayStatus(data) {
    const resultDiv = document.getElementById('status-result');

    if (data.online) {
        resultDiv.innerHTML = `
                    <p>IP: vuniverse.net</p>
                    <p>Port: 19132</p>
                    <p>Phiên bản: ${data.version.name}</p>
                    <p>Trực tuyên: ${data.players.online} / ${data.players.max}</p>
                    
                `;
    } else {
        resultDiv.innerHTML = '<p>Máy chủ đang bảo trì hoặc update</p>';
    }
}

window.onload = function() {
    const videoOverlay = document.querySelector('.video-overlay');
    const content = document.querySelector('.content');

    setTimeout(function() {
        videoOverlay.classList.add('hidden');
        setTimeout(function() {
            videoOverlay.style.display = 'none';
            content.classList.add('show-content');
        }, 1000);
    }, 1800);
};
