<?php

if(isset($_POST['name'], $_POST['corporation'],$_POST['hp'],$_POST['frommail'],$_POST['subject'], $_POST['text'])) {
    $name = $_POST['name'];
    $corporation = $_POST['corporation'];
    $hp = $_POST['hp'];
    $frommail = $_POST['frommail'];
    $subject = $_POST['subject'];   
    $subject=stripslashes($subject);
    $text = $_POST['text'];
    $tomail = "purpleseed@purpleseed.co.kr" ;
    $subject2 = "$name \r $hp \r $corporation \r $frommail \r $text";
    mail($tomail, $subject, $subject2);
}

?>