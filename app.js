var a="";

function clean(){
    a = "0";
    document.getElementById("m2").innerHTML = a;
    a ="";
}
function get_input(value) {
    if (a.length>22){
    }
    else{
    a += value;
    document.getElementById("m2").innerHTML = a;}
}

function submit(){
    var expr =a;
    var out = eval(expr);
    document.getElementById("m2").innerHTML = out;
    a=out;
}
function bks(){
    var l= a.length;
    var e= l-1;
    var slice =a.slice(0,e);
    a=slice;
    document.getElementById("m2").innerHTML =a;
}
