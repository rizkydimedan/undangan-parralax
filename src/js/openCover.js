const toggleButton = document.getElementById('toggleButton');
const videoFrame = document.getElementById('videoFrame');
let player;
let isPlaying = JSON.parse(localStorage.getItem('isPlaying')) || false; // Ambil status dari localStorage atau default ke false
const active = ['bg-blue-500', 'p-1', 'text-white', 'hover:text-white', 'rounded-lg'];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFrame', {
        playerVars: {
            'autoplay': 1, 
            'start': 0,    
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
                player.pauseVideo(); 
                toggleButton.classList.remove(...active);
                isPlaying = false; 
            } else {
                player.playVideo(); 
                toggleButton.classList.add(...active);
                isPlaying = true; 
            }
       

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

});

// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
