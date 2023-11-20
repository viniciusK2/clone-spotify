let navbar = document.getElementById('navbar')
let footer = document.getElementById('footer')

let topoFooter = 210;

window.addEventListener('scroll', function(){
    const foot = footer.getBoundingClientRect();

    if(foot.top <= 110){
        navbar.style.display = 'none';
    }
    else{
        navbar.style.display = 'flex';
    } 

    if(matchMedia('(max-width: 500px)').matches)
        if(foot.top <= topoFooter){
            navbar.style.display = 'none';
        } 
    else {
        navbar.style.display = 'flex';
    }
});