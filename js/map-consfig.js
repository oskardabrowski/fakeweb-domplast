var map = L.map('map').setView([41.0204, 28.981], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.0204, 28.981]).addTo(map)
    .bindPopup('Jesteśmy tutaj')
    .openPopup();
    