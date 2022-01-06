var screenNumberArray = [];
var screenNumberDisplay = 0;
var dotPressed = false;
var afterDotArray = [];
var calculationArguments = [];
var selectedOperator = [];



for (i = 1; i < 11; i++) {
  $("button:nth-child(" + i + ")").click(function() {
    if (dotPressed === false) {

      screenNumberArray.push(Number(this.textContent));
    } else if (dotPressed === true) {
      afterDotArray.push(Number(this.textContent));
    }

    updateScreen();
  })
}

document.addEventListener("keydown", function(event) {
  switch (event.key) {

    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":

    if (dotPressed === false) {

      screenNumberArray.push(event.key);
    } else if (dotPressed === true) {
      afterDotArray.push(event.key);
    }
      updateScreen();
      break;

    case "+":
      plusFunction();
      break;

    case "-":
      minusFunction();
      break;

    case "*":
      multiplyFunction();
      break;

    case "/":
      divideFunction();
      break;

    case "%":
      percentFunction();
      break;

    case "Enter":
      equalsFunction();
      break;

    case ".":
      dotPressed = true;
      break;
  }

})



$(".clear").click(function() {
  resetCalculator();
  $(".screen-display").text(screenNumberDisplay);
});

$(".plus").click(function() {
  plusFunction();
});

$(".minus").click(function() {
  minusFunction();
});

$(".multiply").click(function() {
  multiplyFunction();
});

$(".divide").click(function() {
  divideFunction();
});

$(".percent").click(function() {
  percentFunction();
});

$(".change-sign").click(function() {
  screenNumberDisplay = -screenNumberDisplay;
  $(".screen-display").text(screenNumberDisplay);
});

$(".equals").click(function() {
  equalsFunction();
});

$(".dot").click(function() {
  dotPressed = true;
});




// Functions

function updateScreen() {
  screenNumberDisplay = "" + screenNumberArray[0];

  $(".screen-display").text(screenNumberDisplay);
  for (i = 1; i < screenNumberArray.length; i++) {
    screenNumberDisplay = "" + screenNumberDisplay + screenNumberArray[i];

  }
  for (i = 0; i < afterDotArray.length; i++) {
    screenNumberDisplay = Number(screenNumberDisplay);
    screenNumberDisplay = screenNumberDisplay + (afterDotArray[i] / (10 ** (i + 1)));



    // afterDotDisplay = afterDotDisplay + (afterDotArray[i] / (10 ** i));
    // screenNumberDisplay = Number(screenNumberDisplay) + (afterDotDisplay / (10 ** i));
  }
  $(".screen-display").text(screenNumberDisplay);
  screenNumberDisplay = Number(screenNumberDisplay);
}

function resetCalculator() {
  screenNumberArray = [];
  screenNumberDisplay = 0;
  selectedOperator = [];
  calculationArguments = [];
  afterDotArray = [];
  dotPressed = false;
}

function plusFunction() {
  calculationArguments.push(Number(screenNumberDisplay));
  selectedOperator.push("plus");
  screenNumberArray = [];
  screenNumberDisplay = 0;
  afterDotArray = [];
  dotPressed = false;
}

function minusFunction() {
  calculationArguments.push(Number(screenNumberDisplay));
  selectedOperator.push("minus");
  screenNumberArray = [];
  screenNumberDisplay = 0;
  afterDotArray = [];
  dotPressed = false;
}

function multiplyFunction() {
  calculationArguments.push(Number(screenNumberDisplay));
  selectedOperator.push("multiply");
  screenNumberArray = [];
  screenNumberDisplay = 0
  afterDotArray = [];
  dotPressed = false;
}

function divideFunction() {
  calculationArguments.push(Number(screenNumberDisplay));
  selectedOperator.push("divide");
  screenNumberArray = [];
  screenNumberDisplay = 0;
  afterDotArray = [];
  dotPressed = false;
}

function percentFunction() {
  calculationArguments.push(Number(screenNumberDisplay));
  selectedOperator.push("percent");
  screenNumberArray = [];
  screenNumberDisplay = 0;
  afterDotArray = [];
  dotPressed = false;
}

function equalsFunction() {

  calculationArguments.push(screenNumberDisplay);
  var currentCalculation = calculationArguments[0];

  for (i = 1; i < (calculationArguments.length); i++) {

    if (selectedOperator[i - 1] === "plus") {
      currentCalculation = currentCalculation + calculationArguments[i];
      console.log(currentCalculation);
    } else if (selectedOperator[i - 1] === "minus") {
      currentCalculation = currentCalculation - calculationArguments[i];
      console.log(currentCalculation);
    } else if (selectedOperator[i - 1] === "multiply") {
      currentCalculation = currentCalculation * calculationArguments[i];
      console.log(currentCalculation);
    } else if (selectedOperator[i - 1] === "divide") {
      currentCalculation = currentCalculation / calculationArguments[i];
      console.log(currentCalculation);
    } else if (selectedOperator[i - 1] === "percent") {
      currentCalculation = (currentCalculation / 100) * calculationArguments[i];
      console.log(currentCalculation);
    }
  }

  $(".screen-display").text(currentCalculation);
  screenNumberDisplay = (currentCalculation);

  console.log(calculationArguments);
  console.log(selectedOperator);
  calculationArguments = [];
  selectedOperator = [];
  screenNumberArray = [];
  afterDotArray = [];
  dotPressed = false;

}
