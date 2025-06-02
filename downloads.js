document.addEventListener('DOMContentLoaded', function() {
    console.log("Hello")
    // Fetch the latest release info from GitHub
    fetch('https://api.github.com/repos/v-pun215/Argon/releases/latest')
      .then(response => response.json())
      .then(data => {
        // Update the version and description in the HTML
        document.getElementById('changelogVersion').onclick = function() {
            changelog(data.tag_name.replace('v', ''));
        };      
        console.log("Hello")
        document.getElementById('versionDownload').innerHTML = `Version ${data.tag_name.replace('v', '')}`; // e.g., "v1.1"

        const publishedDate = data.published_at; // Example: "2024-06-01T12:34:56Z"
        console.log('Published at:', publishedDate);
        const dateObj = new Date(publishedDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        }); // e.g., "25 January, 2025"
        
        document.getElementById('dateVersion').innerText = formattedDate;

        document.getElementById("downloadBtn").onclick = function() {
            downloade(data.tag_name.replace('v', ''));
        }
        document.getElementById("downloadBtnZ").onclick = function() {
            downloadezip(data.tag_name.replace('v', ''));
        }
        
      })
      .catch(error => {
        console.error('Error fetching release info:', error);
      });
  });

const LatestVersion = data.tag_name.replace('v', '')