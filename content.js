//alert('Hello world!')
//alert(window.location.href);
//window.location.replace("http://stackoverflow.com");
var currentUrs = window.location.href;
if ((currentUrs.indexOf("facebook") > -1) || (currentUrs.indexOf("google") > -1)) {
    window.location.replace("http://youtube.com");
}

