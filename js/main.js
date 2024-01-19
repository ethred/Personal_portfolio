// Navigation bar eddects on scroll

window.addEventListener("scroll", function(){
    const header=this.document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY>0)
});

// service modal

const serviceModals= document.querySelectorAll(".service-modal");
const leranmoreBtns= document.querySelectorAll(".learn-more-btn");
const modalCloseBtns= document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    console.log('iam here')
    serviceModals[modalClick].classList.add("active");
}

leranmoreBtns.forEach((leranmoreBtn, i) =>{
    leranmoreBtn.addEventListener("click",()=>{
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView)=>{
            modalView.classList.remove("active");
        });
    });
}) ;

// portfolio Section 

const portfolioModals= document.querySelectorAll(".portfolio-model");
const imgCards= document.querySelectorAll(".img-card");
const portfolioCloseBtns= document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    console.log('iam here')
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click",()=>{
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        });
    });
}) ;


// our clinets - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPreView: 1,
    spaceBetween: 30,
    loop: true,
    pagination : {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Light/Dark theme button 
const themeBtn= document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme". getCurremtTheme());
    localStorage.setItem("saved-icon". getCurremtIcon());
})

const getCurremtTheme = () => document.body.classList.contains("dark-theme") ? "dark" :"light";
const getCurremtIcon =() => themeBtn.classList.contains("sun") ? "sun" : "moon";

const saveTheme= localStorage.getItem("Save-theme");
const saveIcon= localStorage.getItem("Save-icon");

if(saveTheme){
    document.body.classList[saveTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[saveIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
 scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop= 0;
})

// Navigation menu items acctive on page scroll

window.addEventListener("scroll", () =>{
    const sections= document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight= current.offsetHeight;
        let sectionTop= current.offsetTop - 50 ;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + " ] ").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id +" ] ").classList.remove("active");
        }
    })
})