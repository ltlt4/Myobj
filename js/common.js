function $(id){
    return document.getElementById(id)
}
//判断浏览器是否支持标准异步对象创建，如果支持标准，返回一个xhr的对象，如果不支持标准创建，返回一个ie8以下的异步对象。
function createXhr(){
    var xhr=null;
    if(window.XMLHttpRequest){
        var xhr=new XMLHttpRequest;
        return xhr;
    }else{
        var xhr=new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}