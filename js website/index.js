burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
navlist = document.querySelector(".navlist")
rightnav = document.querySelector(".rightnav")

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclassresp');
    navlist.classList.toggle('vclassresp');
    navbar.classList.toggle('hnavresp');
})