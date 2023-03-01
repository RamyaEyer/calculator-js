// Implement Stack ADT on array 

numberInput = [];
numList = [];
mathsign = "";
ans;



function enterOne(){

    numberInput.push("1");
    document.getElementById("screen").innerHTML = numberInput.join("");

}

function enterTwo(){

    numberInput.push("2");
    document.getElementById("screen").innerHTML = numberInput.join("");

}

function enterThree(){

    numberInput.push("3");
    document.getElementById("screen").innerHTML = numberInput.join("");

}

function enterFour(){

    numberInput.push("4");
    document.getElementById("screen").innerHTML = numberInput.join("");

}

function enterFive(){

    numberInput.push("5");
    document.getElementById("screen").innerHTML = numberInput.join("");
    
}

function enterSix(){

    numberInput.push("6");
    document.getElementById("screen").innerHTML = numberInput.join("");

}

function enterSeven(){

    numberInput.push("7");
    document.getElementById("screen").innerHTML = numberInput.join("");


}

function enterEight(){

    numberInput.push("8");
    document.getElementById("screen").innerHTML = numberInput.join("");

}

function enterNine(){

    numberInput.push("9");
    document.getElementById("screen").innerHTML = numberInput.join("");

    
}

function enterZero(){

    numberInput.push("0");
    document.getElementById("screen").innerHTML = numberInput.join("");
    
}

function enterDecimal(){

    numberInput.push(".");
    document.getElementById("screen").innerHTML = numberInput.join("");
    disableDecimal();

}
   

function enterPlus(){

    numList.push(numberInput.join(""));
    calculate();
    mathsign = "+";
    numList.push(mathsign);
    numberInput = [];

}

function enterMinus(){

    numList.push(numberInput.join(""));
    calculate();
    mathsign = "-";
    numList.push(mathsign);
    numberInput = [];

}

function enterTimes(){

    numList.push(numberInput.join(""));
    calculate();
    mathsign = "*";
    numList.push(mathsign);
    numberInput = [];

}


function enterDivide(){

    numList.push(numberInput.join(""));
    calculate();
    mathsign = "/";
    numList.push(mathsign);
    numberInput = [];

}

function enterEquals(){

    decimalCount = false;
    numList.push(numberInput.join(""));
    checkMathsign();
    clearMemory();
    
}


function calculate(){

    if(numList.length === 3 && numList[2] != 0){

        checkMathsign();
        numList = [];
        numList[0] = ans;

    }

}

function checkMathsign(){

    if(mathsign == "+"){

        ans = parseFloat(numList[0]) + parseFloat(numList[2]);

    }

    if(mathsign == "-"){

       ans = parseFloat(numList[0]) - parseFloat(numList[2]);

    }

    if(mathsign == "*"){

        ans = parseFloat(numList[0]) * parseFloat(numList[2]);

    }

    if(mathsign == "/"){

        ans = parseFloat(numList[0]) / parseFloat(numList[2]);

    }

    document.getElementById("screen").innerHTML = ans;

}


function clearMemory(){

    numList = [];
    numberInput = [];

}

function clearCalc(){

    clearMemory();
    document.getElementById("screen").innerHTML = "";

}

function disableDecimal(){


}





