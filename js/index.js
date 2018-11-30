
(function(){
    var Imgs=document.getElementById("i4")
    var smalls=document.getElementsByClassName("energize-item");
    var item=document.getElementsByClassName("square-item triangle-item")
        Imgs.onmouseover=function(e){
            var p=e.target.getElementsByClassName("energize-white")
            if(e.target.nodeName=="DIV"&&p.length>0){
            var img=Imgs.getElementsByClassName("energize-white")
            for(var key of img){
                key.style.display="block"
                key.nextElementSibling.style.display="none"
            }
            p[0].style.display="none";
            p[0].nextElementSibling.style.display="block";
            for(var i=0;i<item.length;i++){
                smalls[i].style.display="none"
                item[i].getElementsByTagName("div")[0].className="square-triangle"
                if(item[i].dataset.samll==e.target.dataset.samll){
                item[i].getElementsByTagName("div")[0].className="square-triangle active"
                smalls[i].style.display="block"
                }
            }
            }
        } 

    var ols=document.getElementsByClassName("industry-selector-ol")
    var lis=ols[0].getElementsByTagName("li")
    var iot=document.getElementsByClassName("iot-left-con")
    var bg=document.getElementsByClassName("iot-bg")[0]
        function nost(){
        for(var key in lis){
        lis[key].onmouseover=function(){
           for(var j=0;j<lis.length;j++){
                lis[j].className=""
            }        
           lis[key]=this
           lis[key].className="industry-ol-li"
           for(var i=0;i<iot.length;i++){
            iot[i].style.display="none"
            if(lis[key].dataset.ol==iot[i].dataset.ol){
                   iot[i].style.display="block" 
                   if(i==0){
                    bg.style.backgroundImage="url(./img/home/car-iot.jpg)"
                }else if(i==1){
                    bg.style.backgroundImage="url(./img/home/home-iot.jpg)"
                }else if(i==2){
                    bg.style.backgroundImage="url(./img/home/health-IoT.jpg)"
                }else if(i==3){
                    bg.style.backgroundImage="url(./img/home/industry-IoT.jpg)"
                }  
            }
            } 
            }
           }
           }
           function calc(){
            var cen=document.getElementsByClassName("show")[0]
            cen.style.zIndex="0"
            cen.className="navbar-cen"
            cen.getElementsByClassName("ab-swiper-right")[0].style.transform="translateY(40px)";
            if(cen.nextElementSibling){
             cen.nextElementSibling.style.zIndex="50";
             cen.nextElementSibling.className="navbar-cen show"
             cen.nextElementSibling.getElementsByClassName("ab-swiper-right")[0].style.transform="translateY(0)"
            } else{
            cen.parentNode.children[0].style.zIndex="50";
            cen.parentNode.children[0].className="navbar-cen show";
            cen.parentNode.children[0].getElementsByClassName("ab-swiper-right")[0].style.transform="translateY(0)"
            }
         }
           window.onload=function(){
               calc();
           }
    return Imgs.onmouseover,nost(),setInterval(calc,2500),window.onload
})()