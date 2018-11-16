function $1(id){
    return document.getElementById(id)
}
/*头部菜单*/
function getOm(){
    $1("navbar_li1").style.color="#D23634"
};
function getOs(){
    $1("navbar_li1").style.color="#e8e7e8"
}
function getOm2(){
    $1("navbar_li2").style.color="#D23634"
}
function getOs2(){
    $1("navbar_li2").style.color="#e8e7e8"
}
function getOm3(){
    $1("navbar_li3").style.color="#D23634"
}
function getOs3(){
    $1("navbar_li3").style.color="#e8e7e8"
}
function getOm4(){
    $1("navbar_li4").style.color="#D23634"
}
function getOs4(){
    $1("navbar_li4").style.color="#e8e7e8"
}
function getOm5(){
    $1("navbar_li5").style.color="#D23634"
}
function getOs5(){
    $1("navbar_li5").style.color="#e8e7e8"
}

/*滑轮事件*/
window.addEventListener("scroll",function(){
    var t=document.documentElement.scrollTop||document.body.scrollTop;
    if(t>=50)
     {
    $1("navbar_bg").style.background="#fff"
    $1("nvabar_img").src="img/home/home_03.svg"
    $1("navbar_li1").style.color="#595959"
    $1("navbar_li2").style.color="#595959"
    $1("navbar_li3").style.color="#595959"
    $1("navbar_li4").style.color="#595959"
    $1("navbar_li5").style.color="#595959"
    $1("navbar_span1").style.color="#595959"
    $1("navwra_bg").style.background="#fff"
    $1("navwra_img").src="img/home/home_03.svg"
    $1("navwra_img2").src="img/home/home_05.png"
    $1("navbar_bg").style.boxShadow="0 3px 4px rgba(0,0,0,0.1)"
    
    }else if(t==0){
    $1("navbar_bg").style.background=""
    $1("nvabar_img").src="img/home/home_01.svg"
    $1("navbar_li1").style.color="#e8e7e8"
    $1("navbar_li2").style.color="#e8e7e8"
    $1("navbar_li3").style.color="#e8e7e8"
    $1("navbar_li4").style.color="#e8e7e8"
    $1("navbar_li5").style.color="#e8e7e8"
    $1("navbar_span1").style.color="#e8e7e8"
    $1("navwra_bg").style.background=""
    $1("navwra_img").src="img/home/home_01.svg"
    $1("navwra_img2").src="img/home/home_04.png"
    $1("navbar_bg").style.boxShadow="none"
    }
    })
/*左侧小菜单*/ 
function onNav(){
    var a=$1("navbar_left1").style.height
    if(a=="0px"){
        $1("navbar_left1").style.height="144px"
    }else if(!a==false){
        $1("navbar_left1").style.height="0px"
    }
    
}
function onNav2(){
    var a=$1("navbar_left2").style.height
    if(a=="0px"){
        $1("navbar_left2").style.height="144px"
    }else if(!a==false){
        $1("navbar_left2").style.height="0px"
    }
    
}
function onNav3(){
    var a=$1("navbar_left3").style.height
    if(a=="0px"){
        $1("navbar_left3").style.height="192px"
    }else if(!a==false){
        $1("navbar_left3").style.height="0px"
    }
    
}
function onNav4(){
    var a=$1("navbar_left4").style.height
    if(a=="0px"){
        $1("navbar_left4").style.height="192px"
    }else if(!a==false){
        $1("navbar_left4").style.height="0px"
    }
    
}

function setOn(){
    var navbar=$1("navbarLeft")
    navbar.style.background=" rgba(255,255,255,1)"
    navbar.style.width="300px"
    $1("navbarLeft2").style.display="block"
}
function setOn2(){
    var navbar=$1("navbarLeft")
    navbar.style.background="transparent"
    navbar.style.width="0px"
    $1("navbarLeft2").style.display="none"
}

/*下层鼠标悬停事件*/ 