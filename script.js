function validate(e){
  var v = e.value;
  appendLine(v);
  
  e.value='> ';
}
function enter(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that rusn
        return true;
    }
    else return false;
}

function appendLine(v){
  var node = document.createElement("article");                 // Create a <li> node
  var textnode = document.createTextNode(v);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("console").appendChild(node);
}
