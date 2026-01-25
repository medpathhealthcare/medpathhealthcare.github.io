// Load navbar dynamically
fetch('./navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        // Dispatch event to signal navbar is loaded
        document.dispatchEvent(new Event('navbarLoaded'));
    })
    .catch(error => console.error('Error loading navbar:', error));
