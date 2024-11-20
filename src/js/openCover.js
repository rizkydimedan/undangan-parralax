// Get references to the elements
// const index = document.getElementById('index');
// const cover = document.getElementById('cover');
// const openCover = document.getElementById('openCover');
const videoFrame = document.getElementById('videoFrame');

// let isPlaying = false;


// openCover.addEventListener('click', function () {

//     if (!isPlaying) {
//         videoFrame.src = [video+"autoplay=1"];

//     }

//     setTimeout(function () {
//         cover.classList.remove('d-block');
//         cover.classList.add('none', 'fade-out');
//     }, 500);
// }); 



// Initialize YouTube IFrame API
let player;
let isPlaying = false;
const active = ['bg-blue-500', 'p-1', 'text-white', 'hover:text-white', 'rounded-lg'];
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoFrame', {
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        if (isPlaying) {
            player.pauseVideo(); 
            toggleButton.classList.remove(...active);
        } else {
            player.playVideo(); 
            toggleButton.classList.add(...active);
        }
        isPlaying = !isPlaying; 
    });
}

// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);