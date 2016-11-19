function validate(e){
  var v = e.value;
  appendLine(v);

  e.value='> ';
}
function isEnter(e){
    if(e.keyCode === 13){e.preventDefault();return true;}
    else return false;
}

function appendLine(v){
  var node = document.createElement("article");                 // Create a <li> node
  var textnode = document.createTextNode(v);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("console").appendChild(node);
}
