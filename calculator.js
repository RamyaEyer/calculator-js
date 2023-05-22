
numberInput = [];
numList = [];
mathsign = "";
ans;
numLength = 30;

/* enterNumber(num)

pushes described number into input screen and displays array forming entered number without commas.

*/

function enterNumber(num){

    numberInput.push(num);
    document.getElementById("screen").innerHTML = numberInput.join("");
    disableNegative();
    disableNumberInput();

}



/*enterDecimal()

Pushes decimal to input screen and displays array forming entered number without commas.

Disables decimal button allowing for input to happen once.

*/

function enterDecimal(){

    numberInput.push(".");
    document.getElementById("screen").innerHTML = numberInput.join("");
    document.querySelector(".decimal").disabled = true;
    disableNegative();
    disableNumberInput();

}


/*enterNegative()

Pushes negative sign to input screen and displays array forming entered number without commas.

Disables negative button allowing for input to happen once.

*/

function enterNegative(){

    numberInput.push("-");
    document.getElementById("screen").innerHTML = numberInput.join("");
    document.querySelector(".negative").disabled = true;
    disableNumberInput();

}

/* enterBackspace()

    Pops last entered value, thus deleting it from input screen and displaying new value. 

    Enables previously disabled buttons.

 */

function enterBackspace(){

    character = numberInput.slice(-1);
    numberInput.pop();

    if(character == "."){

        document.querySelector(".decimal").disabled = false;

    }

    if(character == "-"){

        document.querySelector(".negative").disabled = false;

    }

    document.getElementById("screen").innerHTML = numberInput.join("");
    enableNumberInput();

}

/* enterPlus()

Sets up to calculate addition of second number.
Pushes number to question array.
Add + to question array.
Clears number for second input.
Enables buttons to make them usable for next number.

*/

function enterPlus(){

    numList.push(numberInput.join(""));
    calculate();
    overwriteSign();
    mathsign = "+";
    numList.push(mathsign);
    numberInput = [];
    enableButtons();

}

/* enterMinus()

Sets up to calculate subtraction of second number.
Pushes number to question array.
Add - to question array.
Clears number for second input.
Enables buttons to make them usable for next number.

*/

function enterMinus(){

    numList.push(numberInput.join(""));
    calculate();
    overwriteSign();
    mathsign = "-";
    numList.push(mathsign);
    numberInput = [];
    enableButtons();

}

/* enterTimes()

Sets up to calculate multiplication of second number.
Pushes number to question array.
Add * to question array.
Clears number for second input.
Enables buttons to make them usable for next number.

*/

function enterTimes(){

    numList.push(numberInput.join(""));
    calculate();
    overwriteSign();
    mathsign = "*";
    numList.push(mathsign);
    numberInput = [];
    enableButtons();

}

/* enterDivide()

Sets up to calculate division of second number.
Pushes number to question array.
Add / to question array.
Clears number for second input.
Enables buttons to make them usable for next number.

*/

function enterDivide(){

    numList.push(numberInput.join(""));
    calculate();
    overwriteSign();
    mathsign = "/";
    numList.push(mathsign);
    numberInput = [];
    enableButtons();

}


/* enterEquals()




*/

function enterEquals(){

    numList.push(numberInput.join(""));
    checkMathsign();
    clearMemory();
    enableNumberInput();
    
}

function overwriteSign(){

    if(mathsign != ""){

        numList.pop();

    }

}

function disableNegative(){

    if(numberInput.length === 1){

        document.querySelector(".negative").disabled = true;

    }

}

function calculate(){

    if(numList.length === 3 && numList[2] != 0){

        checkMathsign();
        numList = [];
        numList[0] = ans;

    }

    if(numList.length === 1){

        document.getElementById("screen").innerHTML =  numList[0]; 
        document.querySelector(".negative").disabled = true;

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

    document.getElementById("screen").innerHTML = ans.toPrecision(10);
    mathsign = "";

}

function clearMemory(){

    numList = [];
    numberInput = [];
    mathsign = "";
    document.querySelector(".decimal").disabled = false;
    document.querySelector(".negative").disabled = false;
    enableNumberInput();

}

function clearCalc(){

    clearMemory();    
    document.getElementById("screen").innerHTML = "";

}

function disableNumberInput(){

    if(numberInput.length === numLength){

        document.querySelectorAll(".number").forEach(num => num.disabled = true);

    }

}

function enableButtons(){

    document.querySelector(".decimal").disabled = false;
    document.querySelector(".negative").disabled = false;
    enableNumberInput();

}

function enableNumberInput(){

    document.querySelectorAll(".number").forEach(num => num.disabled = false);

}









