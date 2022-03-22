let userAge = 27;
let adultYears;

function calculateAdultAge(){
  adultYears = userAge - 18;
}

calculateAdultAge();
alert(adultYears);

userAge = 30;
calculateAdultAge();
alert(adultYears);

// defining methods
let person = {
  name : "Harshit", // property
  greet(){          // Method
    alert("Hello everybody");
  }
}

person.greet();