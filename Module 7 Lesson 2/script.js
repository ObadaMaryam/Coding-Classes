// Set the text in the output display

function setOutput(value) {

    document.getElementById("output_value").innerText = value;

}

// Get the text from the output display

function getOutput() {

    return document.getElementById("output_value").innerText;

}

// Set the text in the history display

function setHistory(value) {

    document.getElementById("history_value").innerText = value;

}

// Get the text from the history display

function getHistory() {

    return document.getElementById("history_value").innerText;

}

// When number buttons (0-9) are clicked

let numberButtons = document.getElementsByClassName("number");

for (let button of numberButtons) {

    button.addEventListener("click", function () {

        let output = getOutput(); // I am displaying the number that I have clicked

        setOutput(output + this.id); // Add the number to the output

    });

}

// When operator buttons are clicked

let operatorButtons = document.getElementsByClassName("operator");

for (let button of operatorButtons) {

    button.addEventListener("click", function () {

        let id = this.id;

        if (id === "clear") {

            // Clear everything

            setOutput("");

            setHistory("");

        } else if (id === "backspace") {

            let output = getOutput();

            if (output) {

                setOutput(output.slice(0, -1));

            }

        } else if (id === "=") {

            // Calculate the result

            let history = getHistory();

            let output = getOutput();

            let expression = history + output;

            try {

                let result = eval(expression);

                setOutput(result);

                setHistory("");

            } catch (error) {

                setOutput("Error");

            }

        } else {

            // For +, -, x, ÷, %

            let output = getOutput();

            if (output !== "") {

                let history = getHistory();

                let operator = convertOperator(id);

                setHistory(history + output + operator);

                setOutput("");

            }

        }

    });

}

// Convert button ID to actual math operator

function convertOperator(id) {

    if (id === "/") return "/";

    if (id === "x") return "*";

    if (id === "-") return "-";

    if (id === "+") return "+";

    if (id === "%") return "%";

    return "";

    }
