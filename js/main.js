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
