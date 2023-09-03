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

function disableScroll(){   
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function(){
        window.scrollTo(scrollTop,scrollLeft);
    }

    
    rootElement.style.scrollBehavior = "auto"
}




function enableScroll(){
    window.onscroll = function(){
    }

    rootElement.style.scrollBehavior = "smooth";

    localStorage.setItem('opened', 'true');

}


if(!localStorage.getItem('opened')){
    disableScroll();
}

