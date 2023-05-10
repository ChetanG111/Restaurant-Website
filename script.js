const header = document.getElementsByClassName('nav');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 0)
    {
        header[0].classList.add('sticky')
    }
    else
    {
        header[0].classList.remove('sticky')
    }
})

const fullNav = document.getElementById('overlayMenu')
function disNav()
{
    fullNav.style.opacity = 1;
    fullNav.style.zIndex = 10000000;
}

function hideNav()
{
    fullNav.style.opacity = 0;
    fullNav.style.zIndex = -10000000;
}