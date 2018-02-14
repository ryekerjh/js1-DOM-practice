var body = document.querySelector("body");
var header = document.createElement('header');
var mainDiv = document.createElement('div');
var aTag = document.createElement('a');
var footer = document.createElement('footer');
header.innerHTML="<a href='#' class='pull-left'>Home</a><span class='pull-right'><a href='#'>Contact</a><a href='#'>About</a></span>";
mainDiv.innerHTML="<h1 class='text-center'>Hello World!</h1><p class='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officiis numquam architecto recusandae magni consequatur velit eum praesentium quia. Quis deserunt totam error quisquam suscipit aliquam aut necessitatibus impedit molestias.</p>";
footer.innerHTML = "<a href='https://www.facebook.com'>Friend us on Facebook</a>";
mainDiv.classList.add("container");
footer.classList.add("text-center");
for(let i = 0; i < header.childNodes[1].childNodes.length; i++) {
  header.childNodes[1].childNodes[i].style.margin = "0px 16px";
}
body.append(header, mainDiv, footer);
mainDiv.style.height = "90vh";
footer.style.position = "absolute";
footer.style.bottom = "0px";
footer.style.left = "0px";
footer.style.right = "0px";
