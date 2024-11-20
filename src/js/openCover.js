const toggleButton = document.getElementById('toggleButton');
const shouldPlay = localStorage.getItem('playVideo');
const videoFrame = document.getElementById('videoFrame');
let player;
let isPlaying = false; // Default autoplay state
const active = ['bg-blue-500', 'p-1', 'text-white', 'hover:text-white', 'rounded-lg'];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFrame', {
        playerVars: {
            'autoplay': 1,
            'start': 1,

        },
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    // Cek status di localStorage
    if (shouldPlay === 'true') {
        player.playVideo(); // Memulai pemutaran video
        isPlaying = true;
        if (toggleButton) {
            toggleButton.classList.add(...active); // Menyesuaikan tampilan tombol
        }
        // Reset status agar tidak memengaruhi reload
        localStorage.removeItem('playVideo');
    }

    // Tambahkan event listener pada tombol toggle
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            if (isPlaying) {
                player.pauseVideo(); // Jeda video
                toggleButton.classList.remove(...active); // Ubah tampilan tombol
            } else {
                player.playVideo(); // Mainkan video
                toggleButton.classList.add(...active); // Ubah tampilan tombol
            }
            isPlaying = !isPlaying; // Ubah status pemutaran
        });
    }
}

// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);