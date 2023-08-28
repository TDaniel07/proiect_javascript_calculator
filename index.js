const input = document.querySelector("#calculator-input-window");
const calculateButton = document.querySelector(".calulate-button");
const additionButton = document.querySelector("#addition-button");
const subtractionButton = document.querySelector("#subtraction-button");
const multiplicationButton = document.querySelector("#multiplication-button");
const divisionButton = document.querySelector("#division-button");

var keyPressed, number1, number2, result;

function hoverButtonColorChange(Button)
{
    Button.addEventListener("mouseover", () =>{
        Button.classList.add("button-hover-color");
    })
    Button.addEventListener("mouseleave", () =>{
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

number1 = null;
number2 = null;
result = null;

hoverButtonColorChange(calculateButton);
hoverButtonColorChange(additionButton);
hoverButtonColorChange(subtractionButton);
hoverButtonColorChange(multiplicationButton);
hoverButtonColorChange(divisionButton);

