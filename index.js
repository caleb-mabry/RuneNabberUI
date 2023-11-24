var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://cdn.runescape.com/assets/img/external/oldschool/2023/newsposts/2023-07-28/osrs_world_map_july13_2023.png#_ga=2.15430064.729954816.1700803934-711659251.1700065839",
  {
    maxZoom: 19,
  }
).addTo(map);
