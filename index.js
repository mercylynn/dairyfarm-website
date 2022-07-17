
function totalProduction(){
    var a=parseInt(document.getElementById("sheda").value);
    var b=parseInt(document.getElementById("shedb").value);
    var c=parseInt(document.getElementById("shedc").value);
    var d=parseInt(document.getElementById("shedd").value);
    var totalLitres=a+b+c+d;
    document.getElementById("totallitres").value=""+totalLitres;
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
function report(){
    const data=[];
    
    data[0] = parseInt(document.getElementById("sheda").value);
    data[1] = parseInt(document.getElementById("sheda").value);
    data[2] = parseInt(document.getElementById("shedc").value);
    data[3] = parseInt(document.getElementById("shedd").value);

    let sum = 0;

for (let i = 0; i < data.length; i++) {
    sum += array[i];

    

    dailyIncome=sum*40;

    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;

    document.getElementById("outputData").innerHTML += "<p> Your total income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for December is Ksh. " + incomeDecember + " </p>"


    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"
report();

}



