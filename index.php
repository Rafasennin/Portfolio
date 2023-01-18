<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    $vname=$_GET ["form__contact"];

    $vemail=$_GET["email__form"];

    $vtel=$_GET["tel__form"];

    $vtextarea=$_GET["textearea__form"];

    $vcontact=$_GET["contato"];

    $vselect1=$_GET["select1__form"];

    $vselect2=$_GET["select2__form"];

    echo "Nome: " .$vname."<br/>E-mail: " .$vemail. 
         "<br/>Tel:  " .$vtel."<br/>Text:  " .$vtextarea.
         "<br/>Contact:  " .$vcontact. "<br/>Select1:  " .$vselect1.
         "<br/>Select2:  " .$vselect2."<br/>";

?>
    
</body>
</html>



