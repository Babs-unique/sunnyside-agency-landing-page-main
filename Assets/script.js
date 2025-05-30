const toggleMenu = ()=>{
    //Getting all the element needed for the navBar
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    hamburger.addEventListener('click', ()=>{
        //Toggle menu
        console.log(nav.classList.toggle('nav-active'));


//Animate Links In the NavBar
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.3s ease-out backwards ${index/4 + 0.2}s`
            }
        })
    })

}

toggleMenu();