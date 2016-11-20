<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body onclick="document.getElementById('input').focus();">
    <main id="console">

    </main>
    <span class="before">> </span><input id="input" autofocus onkeypress="if(isEnter(event))validate(this,this.value);"></input>
  </body>
</html>
