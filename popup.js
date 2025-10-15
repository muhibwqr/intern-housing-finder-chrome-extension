document.getElementById('searchBtn').onclick = async function() {
  const address = document.getElementById('address').value;
  // TODO: Use Maps Geocode API to get coordinates from address
  // TODO: Fetch housing listings near the coordinates
  // TODO: Render them in #results + plot on #map
  document.getElementById('results').textContent = 'Searching... (hook up API here)';
};
