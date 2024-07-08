// Create the icon element
const icon = document.createElement('img');
icon.src = chrome.runtime.getURL('icon.png');
icon.style.position = 'fixed';
icon.style.left = '10px';
icon.style.top = '10px';
icon.style.width = '48px';  // Increased width
icon.style.height = '48px'; // Increased height
icon.style.cursor = 'pointer';
icon.style.zIndex = '9999';

// Add event listener to show search bar when icon is clicked
icon.addEventListener('click', function() {
  const searchBar = document.createElement('div');
  searchBar.style.position = 'fixed';
  searchBar.style.left = '60px'; // Adjusted to prevent overlap with the larger icon
  searchBar.style.top = '10px';
  searchBar.style.zIndex = '9999';
  searchBar.innerHTML = `
    <input type="text" id="extensionSearchInput" placeholder="Type your search query" style="padding: 5px; width: 200px; box-sizing: border-box;">
    <button id="extensionSearchButton" style="padding: 5px;">Search</button>
  `;
  document.body.appendChild(searchBar);

  document.getElementById('extensionSearchButton').addEventListener('click', function() {
    const query = document.getElementById('extensionSearchInput').value;
    if (query) {
      window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }
  });

  icon.remove();
});

// Append the icon to the body
document.body.appendChild(icon);
