console.log("Wecome to muzze");

let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Night-changes",filePath: "songs/1.mp3",coverPath: "covers/One_Direction_-_Night_Changes_Single_Cover.png"},
    {songName: "drag me down",filePath: "songs/2.mp3",coverPath: "covers/cover2.jpg"},
    {songName: "Permission to dance",filePath: "songs/3.mp3",coverPath: "covers/cover3.jpg"},
    {songName: "who says",filePath: "songs/4.mp3",coverPath: "covers/cover4.jpg"},
    {songName: "let me love you",filePath: "songs/5.mp3",coverPath: "covers/cover5.jpg"},
    {songName: "butter",filePath: "songs/6.mp3",coverPath: "covers/cover6.jpg"},

]

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();
//handle play
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        //gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
    
    else
    {
        audioElement.pause();
        //gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    
    //update seekbar find percentage = (c/d)*100
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;




})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex = 0;
    }

    else{
        songindex+= 1;
    }

    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex = 0;
    }

    else{
        songindex -= 1;
    }

    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})



