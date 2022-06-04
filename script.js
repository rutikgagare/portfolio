
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
})

// light and dark mode
var z = document.getElementById("btn");
var p = document.getElementById("change_mode");


// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = 'none';
})
$(window).load(function() {
    setTimeout(function(){ $('.loader').fadeOut('slow'); }, 3000);
 })
 
// auto typing
var typed = new Typed(".auto",{
    strings:["Web-Developer","Competitive Programmer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})








