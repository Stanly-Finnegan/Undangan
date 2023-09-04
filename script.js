simplyCountdown('.simply-countdown', {
    year: 2023, // required
    month: 10, // required
    day: 15, // required
    hours: 15, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    },

    refresh: 1000, //default refresh every 1s
});

const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
let isPlaying = false; 

function disableScroll(){   
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const song = document.getElementById("song")
    window.onscroll = function(){
        window.scrollTo(scrollTop,scrollLeft);
    }

    
    rootElement.style.scrollBehavior = "auto"
}

function playAudio(){
    ;
    song.play();
    audioIconWrapper.style.display = 'flex'
    isPlaying = true;
}

audioIconWrapper.onclick = function(){
    if(isPlaying){
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    }
    else{
        song.play();
        audioIcon.classList.remove('bi-pause-circle');
        audioIcon.classList.add('bi-disc')
    }
    
    isPlaying = !isPlaying;
}

function enableScroll(){
    window.onscroll = function(){
    }

    rootElement.style.scrollBehavior = "smooth";

    // localStorage.setItem('opened', 'true');

    playAudio();

}


// if(!localStorage.getItem('opened')){
//     disableScroll();
// }

disableScroll();

function copyNumber(){
    const number = "000000";
    // navigator.clipboard.writeText(number);
    window.prompt("Copy to clipboard: Ctrl+C, Enter", number);
    alert("Berhasil disalin")
}


window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Berhasil dikirim")
      })
    });
  });
  


const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to')||'';
console.log(nama);
const namaContainer = document.getElementById('namaTamu');
if(!nama){
    namaContainer.innerText = ` Bapak/Ibu/Saudara/i,`;
    namaContainer.style.fontWeight = 'unset';
}
else{
    namaContainer.innerText = `\n ${nama}, \n`;
    namaContainer.style.fontWeight = 'bold';
}