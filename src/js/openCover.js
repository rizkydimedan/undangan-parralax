const toggleButton = document.getElementById('toggleButton');
const videoFrame = document.getElementById('videoFrame');
let player;
let isPlaying = JSON.parse(localStorage.getItem('isPlaying')) || false; // Ambil status dari localStorage atau default ke false
const active = ['bg-blue-500', 'p-1', 'text-white', 'hover:text-white', 'rounded-lg'];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFrame', {
        playerVars: {
            'autoplay': 1, // Jangan mulai otomatis, kontrol diatur oleh status
            'start': 0,    // Mulai dari awal video
        },
        events: {
            onReady: onPlayerReady,
        },
    });
}

function onPlayerReady(event) {

    if (toggleButton) {
        toggleButton.addEventListener('click', function ()   {
            if (isPlaying) {
                player.pauseVideo(); // Jeda video
                toggleButton.classList.remove(...active);
                isPlaying = false; // Update status
            } else {
                player.playVideo(); // Mainkan video
                toggleButton.classList.add(...active);
                isPlaying = true; // Update status
            }
            localStorage.setItem('isPlaying', JSON.stringify(isPlaying)); // Simpan status ke localStorage

        });
    }
}

// Play onclick btnCover id di autoscroll.js
buttonCover.addEventListener('click', () => {
    if (toggleButton) {
        player.playVideo();
        isPlaying = true;
        toggleButton.classList.add(...active);
    }
    localStorage.setItem('isPlaying', JSON.stringify(isPlaying)); // Simpan status ke localStorage

});

// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
