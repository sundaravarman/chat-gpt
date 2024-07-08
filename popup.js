document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value;
  if (query) {
    chrome.tabs.create({ url: 'https://www.google.com/search?q=' + encodeURIComponent(query) });
  }
});
