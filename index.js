const input = document.querySelector("#calculator-input-window");
const calculateButton = document.querySelector(".calulate-button");
const additionButton = document.querySelector("#addition-button");
const subtractionButton = document.querySelector("#subtraction-button");
const multiplicationButton = document.querySelector("#multiplication-button");
const divisionButton = document.querySelector("#division-button");

var keyPressed, number1, number2, result, operation, isResult;

number1 = null;
number2 = null;
result = null;
operation = null;
isResult = false;

function calculate()
{
    debugger;
    if(operation == null)
        return;
    switch(operation)
    {
        case "+":
        if(number1 != null && number2 != null)
        {
            number1 += number2;
            input.value = number1;
            number2 = null;
        }
        else if(number1 != null && number2 == null)
        {
            if(input.value == "")
            {
                number1 += number1;
                input.value = number1;
                input.focus();
            }
            else
            {
                number2 = Number(input.value);
                number1 += number2;
                input.value = number1;
                number2 = null;
            }
        }
        break;
        
        case "-":
        if(number1 != null && number2 != null)
        {
            number1 -= number2;
            input.value = number1;
            number2 = null;
        }
        else if(number1 != null && number2 == null)
        {
            if(input.value == "")
            {
                number1 -= number1;
                input.value = number1;
                input.focus();
            }
            else
            {
                number2 = Number(input.value);
                number1 -= number2;
                input.value = number1;
                number2 = null;
            }
        }
        break;
        case "*":
        if(number1 != null && number2 != null)
        {
            number1 *= number2;
            input.value = number1;
            number2 = null;
        }
        else if(number1 != null && number2 == null)
        {
            if(input.value == "")
            {
                number1 *= number1;
                input.value = number1;
                input.focus();
            }
            else
            {
                number2 = Number(input.value);
                number1 *= number2;
                input.value = number1;
                number2 = null;
            }
        }
        break;
        
        case "/":
        if(number1 != null && number2 != null)
        {
            number1 /= number2;
            input.value = number1;
            number2 = null;
        }
        else if(number1 != null && number2 == null)
        {
            if(input.value == "")
            {
                number1 /= number1;
                input.value = number1;
                input.focus();
            }
            else
            {
                number2 = Number(input.value);
                number1 /= number2;
                input.value = number1;
                number2 = null;
            }
        }
        break;
    }
    isResult = true;
}

function calculatorOperation(operationSign)
{
    debugger;
    operation = operationSign;

    if(isResult)
    {
        input.value = "";
        isResult = false;
        input.focus();
    }
    else if(number1 == null && number2 == null)
    {
        number1 = Number(input.value);
        input.value = "";
        input.focus();
    }
    else if(number1 != null && number2 == null)
    {
        number2 = Number(input.value);
        input.value = "";
        input.focus();
    }
    else if(number1 != null && number2 != null)
        calculate();
}

function hoverButtonColorChange(Button)
{
    Button.addEventListener("mouseover", (e) =>{
        Button.classList.add("button-hover-color");
    })
    Button.addEventListener("mouseleave", (e) =>{
        Button.classList.remove("button-hover-color");
    })
}

input.addEventListener("keydown", (e) =>{
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    if((isNaN(e.key) && e.key != "Backspace") || e.key == ' ')
    {
        input.blur();
        setTimeout(() => {
            input.focus();
        });
        return;
    }
    if(input.value[0] == '0')
    input.value = input.value.slice(1);
})

hoverButtonColorChange(calculateButton);
hoverButtonColorChange(additionButton);
hoverButtonColorChange(subtractionButton);
hoverButtonColorChange(multiplicationButton);
hoverButtonColorChange(divisionButton);

calculateButton.addEventListener("click", calculate);
additionButton.addEventListener("click", () => {calculatorOperation("+")});
subtractionButton.addEventListener("click", () => {calculatorOperation("-")});
multiplicationButton.addEventListener("click", () => {calculatorOperation("*")});
divisionButton.addEventListener("click", () => {calculatorOperation("/")});

