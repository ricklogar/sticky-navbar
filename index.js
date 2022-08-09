const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
    // console.log("scrolled");
    // console.log(window.scrollY);

    //We calculate the scroll Y with the top of the bottom container
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){ //50 comes from the margin of .text
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
});