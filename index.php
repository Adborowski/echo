<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Echo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />

</head>
<body>

<div id="boxMain">

    <div id="boxSavedTexts">
        <div class="boxSavedText"></div>
    </div>

    <div id="boxActiveText">
        <div id="boxMainInput">
            <input placeholder="Type here to create your drawing." id="mainInput" value=""></input>
        </div>
    </div>

    <?php include "components/control-panel.php" ?>

</div>
    
</body>

<script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>



<script src="js/dom-to-image.js"></script>
<script src="js/file-saver.js"></script>
<script src="js/main.js"></script>



</html>