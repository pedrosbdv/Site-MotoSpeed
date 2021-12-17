const alvo = document.querySelectorAll('[data-buyanime]');

function animeScrolll ()
{
    const windowTopp = window.pageYOffset + 1900;
    alvo.forEach(function(element) 
    {
       if ((windowTop) > element.offsetTop)
       {
           element.classList.add('teste');   
       }
    });

}

window.addEventListener('scroll', function()
{
    animeScrolll();
})