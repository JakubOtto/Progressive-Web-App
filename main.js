function initMap() {
  if (!navigator.geolocation) {
    alert("Twoja przeglądarka nie wspiera geolokalizacji.");
    return;
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const map = L.map('mapid').setView([lat, lon], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup("Jesteś tutaj").openPopup();
  }, function () {
    alert("Nie można pobrać lokalizacji.");
  });
}

document.addEventListener("DOMContentLoaded", initMap);

function sos() {
  if (navigator.vibrate) {
    navigator.vibrate([
      100, 250, 100, 250, 100, 250,   
      600, 250, 600, 250, 600, 250,   
      100, 250, 100, 250, 100, 250    
    ]);
    } else {
    alert("Wibracje nie są obsługiwane na tym urządzeniu.");
  }
}
