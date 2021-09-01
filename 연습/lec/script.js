window.addEventListener('scroll', function(e){
    if(this.scrollY>20){
        document.querySelector('.navbar').classList.add("sticky");
    }else{
        document.querySelector('.navbar').classList.remove("sticky");
    }
})

document.querySelector('.menu-btn').addEventListener('click', function(e) {
    document.querySelector('.navbar .menu').classList.toggle("active");
    document.querySelector('.menu-btn i').classList.toggle("active");
})
