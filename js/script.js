//Grab the body tag and create the elements we need
var body = document.querySelector("body");
var header = document.createElement('header');
var mainDiv = document.createElement('div');
var footer = document.createElement('footer');
//Populate the header, main div, and footer with HTML
header.innerHTML="<a href='#' class='pull-left'>Home</a><span class='pull-right'><a href='#'>Contact</a><a href='#'>About</a></span>";
mainDiv.innerHTML="<h1 class='text-center'>Hello World!</h1><p class='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officiis numquam architecto recusandae magni consequatur velit eum praesentium quia. Quis deserunt totam error quisquam suscipit aliquam aut necessitatibus impedit molestias.</p>";
footer.innerHTML = "<a href='https://www.facebook.com'>Friend us on Facebook</a>";
//Use Bootstrap classes to align things to match schema
mainDiv.classList.add("container");
footer.classList.add("text-center");
//Loop over header's contents to add margin to the right-hand links
for(let i = 0; i < header.childNodes[1].childNodes.length; i++) {
  header.childNodes[1].childNodes[i].style.margin = "0px 16px";
}
//Set the height of the main div to fill the view, and set the footer to stick to bottom of view
mainDiv.style.height = "90vh";
footer.style.position = "absolute";
footer.style.bottom = "0px";
footer.style.left = "0px";
footer.style.right = "0px";

//append the elements we've made to the body tag.
body.append(header, mainDiv, footer);
