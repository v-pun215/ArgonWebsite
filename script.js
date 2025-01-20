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
    window.location.href = "https://github.com/v-pun215/Argon/wiki";
}
function download(){
    window.location.href = "downloads.html";
}
function downloade(version){
    window.location.href = `https://github.com/v-pun215/Argon/releases/download/v${version}/ArgonInstaller-v${version}-x64.exe`;
}
function downloadezip(version){
    window.location.href = `https://github.com/v-pun215/Argon/releases/download/v${version}/ZIP-Argon-v${version}.zip`;
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
        document.getElementById("downloadBtn").classList.add("disabled");
        document.getElementById("downloadBtnZ").classList.add("disabled2");
        document.getElementById("windows_info").style.display = "none";
        document.getElementById("mac_info").style.display = "block";
        document.getElementById("linux_info").style.display = "none";
        document.getElementById("windows").classList.remove("selected-p");
        document.getElementById("linux").classList.remove("selected-p");
        document.getElementById("mac").classList.add("selected-p");
    }
    if(num == 3){
        document.getElementById("downloadBtn").classList.add("disabled");
        document.getElementById("downloadBtnZ").classList.add("disabled2");
        document.getElementById("windows_info").style.display = "none";
        document.getElementById("mac_info").style.display = "none";
        document.getElementById("linux_info").style.display = "block";
        document.getElementById("windows").classList.remove("selected-p");
        document.getElementById("linux").classList.add("selected-p");
        document.getElementById("mac").classList.remove("selected-p");
    }
}