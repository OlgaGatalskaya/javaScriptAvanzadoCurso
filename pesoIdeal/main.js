
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let calculateBtn = document.getElementById('calculate');


function calculateImc() {
    let weightValue = weightInput.value;
    let heightValue = heightInput.value/100;
    let tuImc = (weightValue/(heightValue*heightValue)).toFixed(2);
    console.log(tuImc);
    var pc = document.getElementById("pic_cntr");
    
    if (weightValue != "" && heightValue != "") {
        if (tuImc < 16) { 
            pc.innerHTML= `<h2>Es desnurtido, su IMC es: ${tuImc} </h2> <img src='img/thin.png'>`;
        } else if (tuImc >= 16 && tuImc < 18) {
            pc.innerHTML= `<h2> Es delgado, su IMC es: ${tuImc} </h2> <img src='img/thin1.png'>`;
        } else if (tuImc >= 18 && tuImc < 25) {
            pc.innerHTML= `<h2> Es ideal,  su IMC es:  ${tuImc} </h2> <img src='img/ideal1.png'>`;
        } else if (tuImc >= 25 && tuImc < 31) {
            pc.innerHTML= `<h2> Es sobrepeso, su IMC es: ${tuImc} </h2> <img src='img/sobrepeso.png'>`;
        } else {
            pc.innerHTML= `<h2> Es obeso,  su IMC es:  ${tuImc} </h2> <img src='img/fat.png'>`;
        }
    } else {
        alert ("Debes escribir peso y altura")
    }

    
}

calculateBtn.addEventListener('click', calculateImc);