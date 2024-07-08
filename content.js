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
  searchBar.style.backgroundColor = 'white';
  searchBar.style.border = '1px solid #ccc';
  searchBar.style.padding = '10px';
  searchBar.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
  searchBar.innerHTML = `
    <input type="text" id="extensionSearchInput" placeholder="Type your search query" style="padding: 5px; width: 200px; box-sizing: border-box;">
    <button id="extensionSearchButton" style="padding: 5px;">Search</button>
    <button id="extensionCloseButton" style="padding: 5px; margin-left: 5px;">Close</button>
  `;
  document.body.appendChild(searchBar);

  document.getElementById('extensionSearchButton').addEventListener('click', function() {
    const query = document.getElementById('extensionSearchInput').value;
    if (query) {
      // Open the search results in a new window
      window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank', 'width=800,height=600');
    }
  });

  document.getElementById('extensionCloseButton').addEventListener('click', function() {
    searchBar.remove();
    document.body.appendChild(icon);  // Add the icon back
  });

  icon.remove();
});

// Append the icon to the body
document.body.appendChild(icon);
