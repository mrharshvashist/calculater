


let calc_is_on = true;
// let result = document.getElementById("showResult");

function on() {

    let result = document.getElementById("showResult");
      result.style.display = "flex";
    //   var x = document.getElementById("button2");

    result.innerText = "";
    result.innerText = "0";
    console.log("on");
    calc_is_on = true;

}

var btns = document.querySelectorAll(".btn");
btns.forEach(
    (btn) => {
        btn.addEventListener("click", moveToResult)
    }
);

function moveToResult() {
    // console.log("moveToResult1");
    let result = document.getElementById("showResult");
    if (calc_is_on) {
        result.innerText == "0" && (result.innerText = "");
        let btnValue = this.getAttribute("btnValue");
        // this.classList.contains("spec") && (
        
        result.innerText += btnValue;

    }
    else{
        result.style.display = "inline";
       result.innerText = "Please on it!";
       result.innerText = "ON toh kar!";


   }
}

function wash() {
    let result = document.getElementById("showResult");
    result.innerText = "";
}
function calculate() {
        let result = document.getElementById("showResult");
        try {
            result.innerText = eval(result.innerText);

        } catch (error) {
            result.innerText = error.message;

        }
        console.log("calculate");
    }



    function off() {

        // let result = document.getElementById("showResult");
        //   result.style.display = "none";
        //   var x = document.getElementById("button2");
        wash();

        console.log("off");
        calc_is_on = false;

}




