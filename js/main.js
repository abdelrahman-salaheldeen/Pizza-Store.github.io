var action = document.querySelectorAll(".do-action-js"),
    homeFooter = document.querySelector(".home-footer-js"),
    filterBtns = document.querySelectorAll(".filter-btns-js"),
    filterImgs = document.querySelectorAll(".filter-img-js")

var doAction = () => {
    action.forEach(x => {
        if(window.scrollY >= (x.offsetTop + (x.offsetHeight / 2)) - window.innerHeight){
            x.classList.add("action")
        }else{
            x.classList.remove("action")
        }
    })
}

var homeFooterAction = () =>{
    if(window.scrollY >= (homeFooter.parentElement.offsetTop + (homeFooter.offsetHeight / 2)) - window.innerHeight){
        homeFooter.classList.add("action")
    }else{
        homeFooter.classList.remove("action")
    }
}

var filterChanging = (e) => {
    if(e.target.getAttribute("data-type") == "pizza"){
        filterImgs.forEach(img=>{
            img.style.backgroundImage = img.getAttribute("data-pizza")
        })
    }else if(e.target.getAttribute("data-type") == "drinks"){
        filterImgs.forEach(img=>{
            img.style.backgroundImage = img.getAttribute("data-drinks")
        })
    }else if(e.target.getAttribute("data-type") == "burgers"){
        filterImgs.forEach(img=>{
            img.style.backgroundImage = img.getAttribute("data-burgers")
        })
    }else if(e.target.getAttribute("data-type") == "pasta"){
        filterImgs.forEach(img=>{
            img.style.backgroundImage = img.getAttribute("data-pasta")
        })
    }
    filterBtns.forEach(btn=>{
        btn.classList.remove("active")
    })
    e.target.classList.add("active")
}

window.addEventListener("scroll" , doAction)
window.addEventListener("scroll" , homeFooterAction)
filterBtns.forEach(btn=>{
    btn.addEventListener("click" , filterChanging)
})
