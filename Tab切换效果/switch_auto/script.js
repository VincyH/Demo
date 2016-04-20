//var script=document.createElement("script");
//script.type="text/javascript";
//script.src="./1.12.3/jquery-min.js";
window.onload=function() {
    var lis = $("#notice-tit li");
    var divs = $("#notice-con div");
    var timer = null;
    var index = 0;
    timer = setInterval(function () {
        lis[index].className = "";
        divs[index].style.display = "none";

        if(++index>=lis.length){
            index=0;
        }
        lis[index].className = "selected";
        divs[index].style.display = "block";
    }, 1000);

    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function(){
            if(timer){
                clearInterval(timer);
                timer=null;
            }
            for(var j=0;j<lis.length;j++){
                lis[j].className = "";
                divs[j].style.display = "none";
            }
            lis[this.id].className = "selected";
            divs[this.id].style.display = "block";

        }
        lis[i].onmouseout=function(){
            index=this.id;
            timer = setInterval(function () {
                lis[index].className = "";
                divs[index].style.display = "none";

                if(++index>=lis.length){
                    index=0;
                }
                lis[index].className = "selected";
                divs[index].style.display = "block";
            }, 1000);
        }
    }

    }


//
