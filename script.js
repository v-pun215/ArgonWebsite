

function home(){
    window.location.href = "index.html";
}
function trymc(version){
    window.location.href = `${version}`;
}
function changelog(version){
    window.location.href = `https://github.com/v-pun215/Argon/releases/tag/v${version}`;
}
function secure(){
    window.location.href = "security.html";
}
function git(){
    window.location.href = "https://github.com/v-pun215/Argon/issues/new";
}
function scan(){
    window.location.href = "https://www.virustotal.com/gui/file/6a9d877d39af59784df54d5117d43cfd7714f08048014c3e53c414144f1015e0"
}
function docs(){
    window.location.href = "https://github.com/v-pun215/Argon/blob/main/README.md";
}
function download(){
    window.location.href = "downloads.html";
}
function downloade(version){
    window.location.href = `https://github.com/v-pun215/Argon/releases/download/v${version}/ArgonInstaller-v${version}-x64.exe`;
}
function downloadMac(version){
    window.location.href = `https://github.com/v-pun215/Argon/releases/download/v${version}/ArgonMac.sh`;
}

function downloadezip(version){
    window.location.href = `https://github.com/v-pun215/Argon/releases/download/v${version}/Argon-v${version}.zip`;
}
document.querySelector('.centerer').addEventListener('click', function() {
    this.classList.add('gradient-bg');
    this.style.color = "#aaaaac;";

    var lefter = document.querySelector('.lefter');
    var righter = document.querySelector('.righter');

    if (lefter.classList.contains('gradient-bg')) {
        lefter.classList.remove('gradient-bg');
    }

    if (righter.classList.contains('gradient-bg')) {
        righter.classList.remove('gradient-bg');
    }
    var imageOne = document.querySelector('.image .one');
    var imageTwo = document.querySelector('.image .two');
    var imageThree = document.querySelector('.image .three');

    imageOne.style.display = 'none';
    imageTwo.style.display = 'block';
    imageThree.style.display = 'none';
});
document.querySelector('.righter').addEventListener('click', function() {
    this.classList.add('gradient-bg');
    this.style.color = "#aaaaac;";

    var lefter = document.querySelector('.lefter');
    var righter = document.querySelector('.centerer');

    if (lefter.classList.contains('gradient-bg')) {
        lefter.classList.remove('gradient-bg');
    }

    if (righter.classList.contains('gradient-bg')) {
        righter.classList.remove('gradient-bg');
    }
    var imageOne = document.querySelector('.image .one');
    var imageTwo = document.querySelector('.image .two');
    var imageThree = document.querySelector('.image .three');

    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'block';
    
});
document.querySelector('.lefter').addEventListener('click', function() {
    this.classList.add('gradient-bg');
    this.style.color = "#aaaaac;";

    var lefter = document.querySelector('.righter');
    var righter = document.querySelector('.centerer');

    if (lefter.classList.contains('gradient-bg')) {
        lefter.classList.remove('gradient-bg');
    }

    if (righter.classList.contains('gradient-bg')) {
        righter.classList.remove('gradient-bg');
    }
    var imageOne = document.querySelector('.image .one');
    var imageTwo = document.querySelector('.image .two');
    var imageThree = document.querySelector('.image .three');

    imageOne.style.display = 'block';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
});
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function selectPlatform(num){
    if(num == 1){
        document.getElementById("downloadBtn").innerHTML = `<i style="margin-right:10px;" class="fa-solid fa-download"></i> Download .exe`;
        fetch('https://api.github.com/repos/v-pun215/Argon/releases/latest')
        .then(response => response.json())
        .then(data => {
            
            const versionName = data.tag_name;

            const versionDescription = data.body; 
            document.getElementById("downloadBtn").onclick = function() {
            downloade(versionName.replace('v', ''));
        }

        })
        .catch(error => {
            console.error('Error fetching release info:', error);
        });
        
        
        document.getElementById("downloadBtn").classList.remove("disabled");
        document.getElementById("downloadBtnZ").classList.remove("disabled2");
        document.getElementById("windows_info").style.display = "block";
        document.getElementById("mac_info").style.display = "none";
        document.getElementById("linux_info").style.display = "none";
        document.getElementById("windows").classList.add("selected-p");
        document.getElementById("linux").classList.remove("selected-p");
        document.getElementById("mac").classList.remove("selected-p");
    }
    if(num == 2){
        document.getElementById("downloadBtn").classList.remove("disabled");
        document.getElementById("downloadBtnZ").classList.remove("disabled2");
        document.getElementById("downloadBtn").innerHTML = `<i style="margin-right:10px;" class="fa-solid fa-download"></i> Download .sh`;
        // Example: Fetch latest release info from GitHub
        fetch('https://api.github.com/repos/v-pun215/Argon/releases/latest')
        .then(response => response.json())
        .then(data => {
            
            const versionName = data.tag_name;

            const versionDescription = data.body; 
            document.getElementById("downloadBtn").onclick = function() {
                downloadMac(versionName.replace('v', ''));
            };

        })
        .catch(error => {
            console.error('Error fetching release info:', error);
        });


        
        document.getElementById("windows_info").style.display = "none";
        document.getElementById("mac_info").style.display = "block";
        document.getElementById("linux_info").style.display = "none";
        document.getElementById("windows").classList.remove("selected-p");
        document.getElementById("linux").classList.remove("selected-p");
        document.getElementById("mac").classList.add("selected-p");
    }
    if(num == 3){
        document.getElementById("downloadBtn").innerHTML = `<i style="margin-right:10px;" class="fa-solid fa-download"></i> Download .sh`;
        document.getElementById("downloadBtn").classList.add("disabled");
        document.getElementById("windows_info").style.display = "none";
        document.getElementById("mac_info").style.display = "none";
        document.getElementById("linux_info").style.display = "block";
        document.getElementById("windows").classList.remove("selected-p");
        document.getElementById("linux").classList.add("selected-p");
        document.getElementById("mac").classList.remove("selected-p");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Fetch the latest release info from GitHub
    fetch('https://api.github.com/repos/v-pun215/Argon/releases/latest')
      .then(response => response.json())
      .then(data => {
        // Update the version and description in the HTML
        document.getElementById('versiondisplay').innerHTML = `See what's new in ${data.tag_name} <i style="margin-left:5px;" class="fa-solid fa-arrow-right"></i>`; // e.g., "v1.1"
        document.getElementById('versiondisplay').onclick = function() {
            changelog(data.tag_name.replace('v', ''));
        };      
        document.getElementById('description').innerText = data.body; // Release notes/description
        document.getElementById('versionDownload').innerHTML = `Version ${data.tag_name.replace('v', '')}`; // e.g., "v1.1"
        console.log("Hello")
        document.getElementById('versionDownload').onclick = function() {
            downloade(data.tag_name.replace('v', ''));
        };
      })
      .catch(error => {
        console.error('Error fetching release info:', error);
      });
  });