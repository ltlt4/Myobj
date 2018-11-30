$(function(){ 
    function err (name,reg,tip,e){
    var $txt=$(`input[name=${name}]`);
    if(!reg.test($txt[0].value)){
    $txt.next().show().html(`${tip}`)
    e.preventDefault();
    }else{
        $txt.next().hide()
    }
    if($txt[0].value.length<1){
        $txt.next().show().html(`${$txt.attr("placeholder")}不能为空`) 
    }
}
 $("#myform").on({
    "focus":function(e){
    var $dex=$(this)  
    $dex.addClass("box-s")},
    "blur":function(e){
    var $dex=$(this)
    $dex.removeClass("box-s")
}     
 },":text,:password")

$(":submit").on("click",function(e){
err("name", /^([\u4e00-\u9fa5\·]{2,10})$/,"请输入正确的姓名",e)
err("phone",/^(((13|14|15|18|17)\d{9}))$/,"请输入正确的电话号码",e)
err("pwd",/^[a-zA-Z0-9]{6,15}$/,"请输入6位以上的密码",e)
err("email",/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,"请输入正确的邮箱",e)
err("company",/^(([\u4e00-\u9fff]{2,50})|([a-z\.\s\,]{2,50}))$/i,"请输入正确的公司名称",e)
})

$("#phone").on("blur",data)
$("#mail").on("blur",data)
function data (event){
var xhr = createXhr()
var $kname=$(this)
if($kname.val().length>1){
xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {
   var res = xhr.responseText;
   if(res=="1"){
       $(":submit").attr("disabled","false")
       $kname.next().show().html(`该${$kname.attr("placeholder")}已被占用`)
   }else{
     $(":submit").removeAttr("disabled")
     $kname.next().hide()
   }
}
}
xhr.open("post", "/user/select", true)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var formdata ="kname="+`${$kname.val()}`+"&key="+$kname.attr("placeholder")
xhr.send(formdata)
}
}
 


$("#myform").submit(function(e){
e.preventDefault()
$(".modal-bg").show()
$(".modal-bg-data").show()
$(".modal-bg-data").children().last().on("click",function(){
    $(".modal-bg").hide()
    $(".modal-bg-data").hide()
    window.location.reload()
})
var xhr = createXhr()
xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {
      var res = xhr.responseText;
    }
}
var $uname = $("#name")[0].value
var $phone = $("#phone")[0].value
var $mail = $("#mail")[0].value
var $com = $("#company")[0].value
var $int = $("#introduce")[0].value
var $upwd=$("#pwd")[0].value
xhr.open("post", "/user/reg", true)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var formdata = "name=" + $uname + "&phone=" + $phone +"&pwd="+$upwd+"&mail=" + $mail + "&company=" + $com + "&introduce=" + $int
xhr.send(formdata)


})})
