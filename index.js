function totalProduction(){
    var a=parseInt(document.getElementById("txta").value);
    var b=parseInt(document.getElementById("txtb").value);
    var c=parseInt(document.getElementById("txtc").value);
    var d=parseInt(document.getElementById("txtd").value);
    var e=a+b+c+d;
    document.getElementById("txte").value=""+e;
}