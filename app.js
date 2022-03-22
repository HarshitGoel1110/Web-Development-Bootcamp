let paragraphElement = document.querySelector("p");

function paragraphChange(){
  paragraphElement.textContent = 'clicked';
}

paragraphElement.addEventListener('click' , paragraphChange);

let inputElement = document.querySelector('input');

function retrieveUserValue(event){
  // this "event" object is directly provided by the javascript at the time of calling this object
  // when we console log this object we can retrieve all the necessary details we want
  console.log(event);
  let enteredText = event.target.value;
  console.log(enteredText);
}

inputElement.addEventListener('input' , retrieveUserValue);