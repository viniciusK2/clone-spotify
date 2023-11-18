let navbar = document.getElementById('navbar')
let footer = document.getElementById('footer')

let topoFooter = 160;

window.addEventListener('scroll', function(){
    const foot = footer.getBoundingClientRect();
    const nav = navbar.getBoundingClientRect()
    console.log(nav)
    if(foot.top <= topoFooter){
        navbar.style.display = 'none';
    } 
   
    else {
        navbar.style.display = 'flex';
    }
});