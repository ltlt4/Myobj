$(".applyInput").on("blur",function(){
    bott(this)
})
$(function(){
    var $but=$(":submit")
    $but.on("click",function(e){
        err("uname",/^(((13|14|15|18|17)\d{9}))$/,/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,"请输入正确的手机号或者邮箱",e)
    })
    function err(name,reg1,reg2,tip,e){
    var $txt=$(`input[name=${name}]`);
    if($txt[0].value.length<1){
        $txt.next().show().html(`${$txt.attr("placeholder")}不能为空`)
       e.preventDefault()
         return 
    }
    if(reg1.test($txt[0].value)){
        $txt.next().hide()
        var xhr=createXhr()
        var $uname=$("input[name=uname]").val()
        var $pwd=$("input[name=passwd]").val()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
               var res = xhr.responseText;
               console.log(res)
               if(res=="1"){
                $(":password").next().html("用户名或者密码错误").show()
                 }else if(res=="0"){
                    $(location).attr('href', 'index.html')
                 }
               }
            }
            xhr.open("post", "/user/login", true)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var formdata ="uname="+$uname+"&pwd="+$pwd+"&key="+0
            xhr.send(formdata)
    }else if(reg2.test($txt[0].value)){
        $txt.next().hide()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
               var res = xhr.responseText;
               if(res=="1"){
                $(":password").next().html("用户名或者密码错误")
               }else if(res=="0"){
                $(location).attr('href', 'index.html')
               }
               }
            }
            var $uname=$("input[name=uname]").val()
            var $pwd=$("input[name=passwd]").val()
            xhr.open("post", "/user/login", true)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var formdata ="uname="+$uname+"&pwd"+$pwd+"&key="+1
            xhr.send(formdata)
    }else {
        $txt.next().show().html(`${tip}`)
        e.preventDefault()
        return
    }
    }
   $("#myfrom").on("submit",function(e){
   e.preventDefault()
   })
})
