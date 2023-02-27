// Implement Stack ADT on array 

numberInput = [];
numList = [];
mathsign = "";

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

function enterPlus(){

    numList.push(numberInput.join(""));
    mathsign = "+";
    numList.push(mathsign);
    numberInput = [];
    alert(numList);

}

function enterEquals(){

    numList.push(numberInput.join(""));
    checkMathsign();

}

function checkMathsign(){

    if(mathsign == "+"){

        document.getElementById("screen").innerHTML = parseFloat(numList[0]) + parseFloat(numList[2]);

    }


}




