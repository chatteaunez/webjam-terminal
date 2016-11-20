var data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data = JSON.parse(this.responseText);
     validate(null,'boot');
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();


function validate(e,v){
  appendLine(v);
  for(var i=0;i<data.length;i++){
    if(v==data[i].key){
      var time=0;
      for(var j=0;j<data[i].lines.length;j++) {
        time += Math.random()*600+250;
        setTimeout(appendLine,time,data[i].lines[j])
      }

    }
  }
  if(e){e.value='';}
}
function isEnter(e){
    if(e.keyCode===13){e.preventDefault();return true;}
}

function appendLine(v){
  var node = document.createElement("article");
  node.innerHTML=v;
  document.getElementById("console").appendChild(node);
}
