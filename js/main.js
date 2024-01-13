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