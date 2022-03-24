// calculate Sum
const calculateSumButton = document.querySelector("#calculator button");

function calculateSum(){
  const userNumberInputElement = document.querySelector("#user-number");
  const enteredNumber = userNumberInputElement.value;

  let sum = 0;
  for(let i = 0;i<=enteredNumber;i++){
    sum += i;
  }
  
  const outputElement = document.getElementById("#calculated-sum");
  outputElement.textContent = sum;
  // in the starting this outputElement is hidden
  outputElement.style.display = 'block';

}

calculateSumButton.addEventListener('click' , calculateSum);


// highlight-links
const highlightLinkButtonElement = document.querySelector("#highlight-links button");

function highlightLinks(){
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for(const anchorElement of anchorElements){
    anchorElement.classList.add("highlight");
  }
}

highlightLinkButtonElement.addEventListener('click' , highlightLinks);


// display user data
const dummyUserData = {
  name : "Harshit Goel",
  age : 20,
  company : "PayPal"
}

const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData(){
  const outputDataElement = document.getElementById("output-user-data");
  outputDataElement.innerHTML = "";
  for(const i in displayUserDataButtonElement){
    const newUserDataListItemElement = document.createElement("li");
    const outputText = i.toUpperCase() + " : " + displayUserDataButtonElement[i];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener('click' , );