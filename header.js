let headbtn=document.querySelector("#button");
let menu=document.querySelector(".menu");
let data=1;
headbtn.addEventListener("click",function(){
    if(data==0){
        menu.style.left="-100%";
        menu.style.transitionDuration="0.5s";
        data=1;
    }else{
        menu.style.left="0px";
        menu.style.transitionDuration="0.5s";
        data=0;
    }
});


let btn=document.querySelectorAll(".menu");

btn.forEach(btn => {
    btn.addEventListener("click",function(){
        menu.style.left="-100%";
        data=1;
    })
});

