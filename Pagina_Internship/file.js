function openPopup()
{
    document.getElementById("popup").classList.add('active');
}

function closePopup()
{
    document.getElementById("popup").classList.remove('active');
}

window.addEventListener('scroll' ,function()
{
    const about=document.querySelector('.about');
    const rect=about.getBoundingClientRect();
    if (rect.top< window.innerHeight-100)
    {
        about.classList.add('visible')
    }
})