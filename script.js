document.getElementById('nav').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});

document.getElementById('nav').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});

document.getElementById('nav1').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});

document.getElementById('nav2').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});

document.getElementById('nav3').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});

document.getElementById('nav4').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});

// for hamburger
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
});



// light and dark mode
var z = document.getElementById("btn");
var p = document.getElementById("change_mode");


// auto typing
var typed = new Typed(".auto",{
    strings:["Web-Developer","Competitive Programmer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});



// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = 'none';
})



 









