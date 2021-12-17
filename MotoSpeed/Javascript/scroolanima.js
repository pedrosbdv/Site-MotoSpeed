const target = document.querySelectorAll('[data-anime]');

function animeScroll ()
{
    const windowTop = window.pageYOffset + 850;
    target.forEach(function(element) 
    {
       if ((windowTop) > element.offsetTop)
       {
           element.classList.add('teste');   
       }
    });

}

window.addEventListener('scroll', function()
{
    animeScroll();
})
