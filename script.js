let navbar = document.getElementById('navbar')
let footer = document.getElementById('footer')

window.addEventListener('scroll', function(){
    const foot = footer.getBoundingClientRect();

    if(foot.top <= 210){
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});