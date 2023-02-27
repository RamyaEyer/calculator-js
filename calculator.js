// Implement Stack ADT on array 

const numberInput = [];
const numList = [];
const mathsign = "";

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
    numList.push("+");
    numberInput = [];
    alert(numList);

}

function enterEquals(){

    numList.push(numberInput.join(""));
    solveQuestion();
}

function solveQuestion(){



}

