/*=============== SHOW MENU ===============*/
let open_menu = document.getElementById("open_menu");
let list = document.querySelector(".list");
let close_menu = document.getElementById("close_menu");

open_menu.addEventListener("click" , ()=>{
    list.classList.add("show")
})

close_menu.addEventListener("click" , ()=>{
    list.classList.remove("show")
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    let header = document.getElementById("header");

    if(this.scrollY >= 50){
        header.classList.add("scroll_header")
    }else{
        header.classList.remove("scroll_header")
    }
}

window.addEventListener(`scroll` , scrollHeader)