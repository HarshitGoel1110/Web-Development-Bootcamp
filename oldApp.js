// document.body.children[1].children[0].href = "https://www.google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link"); 
// in this we can place any css selector or combinator
anchorElement.href = "https:/instagram.com";


// here we only need to specify the type of element that we want to create.
// so here we are creating the anchor element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://google.com";
newAnchorElement.target = "_blank";
newAnchorElement.textContent = "This will lead to google.com";

let parentElement = document.querySelector('p'); // here we are accessing the first p tag

parentElement.append(newAnchorElement);


// remove a HTML element
let h1Element = document.querySelector('h1');
h1Element.remove();

// move an element
let firstParagraph = document.querySelector('p');
firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML += "<br>This is <strong>Harshit</strong>";