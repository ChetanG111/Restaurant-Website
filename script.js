const header = document.getElementsByClassName('nav');
const topBtn = document.getElementById('topBtn')

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 0)
    {
        header[0].classList.add('sticky')
        topBtn.style.opacity = 1;
    }
    else
    {
        header[0].classList.remove('sticky')
        topBtn.style.opacity = 0;
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

const observer = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }

    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));