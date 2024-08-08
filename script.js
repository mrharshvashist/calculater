



// var result = document.getElementById("showResult");

function on() {

    var result = document.getElementById("showResult");
      result.style.display = "flex";
    //   var x = document.getElementById("button2");

    result.value = "";
    result.placeholder = "0";


}
var btns = document.querySelectorAll(".btn");
btns.forEach(
    (btn) => {
        btn.addEventListener("click", moveToResult)
    }
);

function moveToResult() {
    var result = document.getElementById("showResult");
    if (result.style.display == "flex" && result.placeholder == "0" ) {

        result.placeholder = "0";
        result.value += this.getAttribute("btnValue");

    }
    else{
        result.style.display = "inline";
       result.placeholder = "Please on it!";


   }
}

function wash() {
    var result = document.getElementById("showResult");
    result.value = "";
}
function calculate() {
        var result = document.getElementById("showResult");
        var el = String("error");
        try {
            result.value = eval(result.value);

        } catch (error) {
            result.value = el ;

        }
    }



    function off() {

        var result = document.getElementById("showResult");
          result.style.display = "none";
        //   var x = document.getElementById("button2");
        wash();


}




