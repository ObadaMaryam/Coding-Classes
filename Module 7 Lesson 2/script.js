//Set the text in the output display
function setoutput(value) {
    document.getElementById("output_value").innerText = value;
}

//Get the text from the output display
function getoutput() {
    return document.getElementById("output_value").innerText;
}

//Set the text in the history display
function sethistory(value) {
    document.getElementById("history_value").innerText = value;
}

//Get the text from the history display
function gethistory() {
    return document.getElementById("history_value").innerText;
}

//when number buttons (0-9) clicked 
let numberButtons = document.getElementsByClassName("number")
for (let button of numberButtons) {
    button.addEventListener("click", function () {
        let output = getoutput(); // I am displaying number that I have clicked
        setoutput(output + this.id); //Whatever number I am clicking , I set the number to the output div
    })
}

//when operator buttons are clicked
let operatorButtons = document.getElementsByClassName("operator")
for (let button of operatorButtons) {
    button.addEventListener("cick", function () {
        let id = this.id;

        if (id == "clear") {
            //clear everything
            setoutput("");
            sethistory("")
        }
        else if (id == "backspace") {
            let output = getoutput();
            if (output) {
                setoutput(output.slice(0, -1))
            }
        }
        else if (id == "=") {
            //Calculate the result
            let history = gethistory;
            let output = getoutput;
            let expression = history + output;

            try {
                let result = eval(expression);
                setoutput(result);
                sethistory("");
            } catch (error) {
                setoutput("Error")
            }
        }
        else {
            let output = getoutput();
            if (output !== "") {
                let history = gethistory;
                let operator = convertoperator(id);
                sethistory(history + output + operator);
                setoutput("");
            }
        }
    })
}

//Convert button id to actual math operator
function convertoperator(id) {
    if (id == "/") return "/"
    if (id == "x") return "*"
    if (id == "-") return "-"
    if (id == "+") return "+"
    if (id == "%") return "%"
    return "";
}
