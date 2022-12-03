const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menuBtn = $('.btn-menu');
const closeMenuBtn = $('.btn-closed');
const nav = $('.nav-menu');
const mask = $('.nav-modal');
const navItems = $$('.nav-item');
const app = {
        
    handleEvent (){
      handleheaderEvent();
     },
    start (){
        this.handleEvent();
    }
}
app.start();

function  handleheaderEvent(){
    menuBtn.onclick = function(){
        nav.classList.toggle("nav-menu-active");
        mask.classList.add("nav-modal-active");
    }
    closeMenuBtn.onclick = ()=> {
    nav.classList.remove("nav-menu-active");
     mask.classList.remove("nav-modal-active");
     }
     mask.onclick = ()=>{
        nav.classList.remove("nav-menu-active");
        mask.classList.remove("nav-modal-active");
     }}
