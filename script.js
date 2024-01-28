var crsr = document.querySelector("#cursor");
//dets is cursor ki information x and y direction me
var blur = document.querySelector("#cursorblur");

document.addEventListener("mousemove",function(dets) {
    //it means ki aap left se itna chle jao aur top se itna to movement complete ho jaega
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px"; 
    //jitna x and y chla hai utna aap chlo
    blur.style.left = dets.x-250+"px";
    blur.style.top = dets.y-250+"px";
    //dikkat ye thi ki ye bada vale ka top left corner apne saath chlra tha isliye thoda adjust krlia
});
//h4 pr jab mouse jara hai tb scale up and down krne ke liye
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #a3d026";
        crsr.style.backgroundColor = "#a3d026";
    }) 
})
gsap.to("#nav",{/*gsap.to likha ab uske andar phle mention kispe apply krna hai phir curly braces me uspe apply krdo mtlb object pr*/ 
    backgroundColor: "#000",
    height:"110px",
    duration: 0.5,//0.5s baad aana
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
});
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },
});
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#waiting",{
    y:50,
    scrollTrigger:{
        trigger:"#waiting",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:1,
    }
})