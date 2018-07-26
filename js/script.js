const script = document.querySelector("script");
const body = document.querySelector("body");


let newP = document.createElement("p");
let newH1 = document.createElement("h1");
let newFooter = document.createElement("footer");
let footerLink = document.createElement("a");
let newHeader = document.createElement("header");
let newUl = document.createElement("ul");

/*
Creates an li for the DOM.
Expect a list of classes (string) and a string of text.
Returns newElement appended to the nav.
*/
function createLi(classArray, linkText) {
  let newLink = document.createElement("li");
  let aTag = document.createElement("a")
  aTag.setAttribute("href", "#");
  aTag.textContent = linkText;
  newLink.appendChild(aTag);
  for(let i = 0; i < classArray.length; i++) {
    newLink.classList.add(classArray[i]);
  };
  newUl.appendChild(newLink);
};
createLi(["pull-left"], "Home");
createLi(["pull-right"], "Contact");
createLi(["pull-right"], "About");

newUl.classList.add("nav", "nav-pills");

newHeader.appendChild(newUl);
body.insertBefore(newHeader, script);

let newDiv = document.createElement("main");
newDiv.classList.add("col-sm-6", "col-sm-offset-3", "text-center");

function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
};

let h1 = createTextElement("h1", "Hello World!");
let p = createTextElement("p", )


// newDiv.appendChild(newH1);
// newH1.textContent = "Hello World!";
// newH1.classList.add("text-center");
//
// newP.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// newDiv.appendChild(newP);
// newDiv.insertBefore(newH1, newP);
// newP.classList.add("text-justified");
//
// body.insertBefore(newFooter, script);
// footerLink.textContent= "Add us on fb";
// newFooter.appendChild(footerLink);
// newFooter.classList.add("text-center");
// footerLink.setAttribute("href","https://www.facebook.com/");
