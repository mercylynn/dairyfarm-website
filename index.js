function totalProduction(){
    var a=parseInt(document.getElementById("txta").value);
    var b=parseInt(document.getElementById("txtb").value);
    var c=parseInt(document.getElementById("txtc").value);
    var d=parseInt(document.getElementById("txtd").value);
    var e=a+b+c+d;
    document.getElementById("txte").value=""+e;
}
function incomeOverTime(selling_price, time){
    var f=parseInt(document.getElementById("txtf").value);
    var g=f*e*7;
    var h=f*e*7*12;
    document.getElementById("textg").value=""+g;
    document.getElementById("texth").value=""+h;
}