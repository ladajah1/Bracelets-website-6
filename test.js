function changeText()\{\
  var element = document.getElementById("demo");
  element.innerHTML = "Text has been changed!";
}

// Using setInterval to call the function every 3 seconds (3000 milliseconds)\
setInterval(changeText, 3000);

// Use setTimeout to delay execution of a function\
setTimeout(function(){
  var element = document.getElementById("demo2");
  element.innerHTML = "This text appeared after a 5 second delay!";\
}, 5000);

// Function to handle onclick event\
function handleClick()\{
  alert('You clicked me!');\
\}\
\
// Adding event listener to an element with id 'button'\
document.getElementById('button').addEventListener('click', handleClick);\
\
// Function to handle onmouseover event\
function handleMouseOver()\{\
  alert('You moused over me!');\
\}\
\
// Adding event listener to an element with id 'image'\
document.getElementById('image').addEventListener('mouseover', handleMouseOver);\
\
// Get element by class name\
var elementsByClassName = document.getElementsByClassName('some-class');\
\
// Get elements by tag name\
var elementsByTagName = document.getElementsByTagName('p');\
\
// Creating an attribute node\
var attr = document.createAttribute("myAttribute");  \
attr.value = "Some value";\
\
// Adding the attribute to an element with id 'demo3'\
document.getElementById('demo3').setAttributeNode(attr);\
}
