var map = L.map("map").setView([0, 0], 0);
L.tileLayer("public/{z}/{x}/{y}.png", {
  maxZoom: 9,
}).addTo(map);
