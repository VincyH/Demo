window.onload=function(){
    var lis=$("#notice-tit li");
    var divs=$("#notice-con div");
    for(var i=0;i<lis.length;i++) {
        lis[i].id = i;
        lis[i].onmouseover = function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = "";
                divs[j].style.display = "none";
            }
            this.className = "selected";
            divs[this.id].style.display = "block";
        }
    }
}