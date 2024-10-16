


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songname:"Warriyo - Mortals",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songname:"Cielo - Huma-Huma",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songname:"DEAF KEV - Invincible",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songname:"Different Heaven",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songname:"Janji-Heroes",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songname:"Heroes Tonight",filePath:"song/6.mp3",coverPath:"covers/6.jpg"}
]


// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;

    }
})

// Listening to events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
});

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener("click",(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
  })   
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('previous]').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex-1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})