
function totalProduction(){
    var shedA=parseInt(document.getElementById("sheda").value);
    var shedB=parseInt(document.getElementById("shedb").value);
    var shedC=parseInt(document.getElementById("shedc").value);
    var ShedD=parseInt(document.getElementById("shedd").value);
    var total=shedA+shedB+shedC+ShedD;
    document.getElementById("totallitres").value=""+total;
}


function incomeOverTime(sellingPrice, time){
    var perWeek = sellingPrice * time;
    var perMonth = perWeek * 4;
    var perYear = perMonth * 12;
    document.getElementById("perWeek").value=""+perWeek;
    document.getElementById("perMonth").value=""+perMonth;
    document.getElementById("perYear").value=""+perYear;
}


// get values from the form when the user clicks the submit button
document.getElementById('incomeForm').addEventListener("submit", e => {
    e.preventDefault();

    // get the values from the form
    const buyingPrice = document.getElementById('buyingPrice').value;
    const time = document.getElementById('time').value;
    const litres = document.getElementById('litres').value;

    // calculate the income
    const sellingPrice = litres * buyingPrice;

    incomeOverTime(sellingPrice, time);
});





