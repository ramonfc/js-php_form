<?php
session_cache_limiter('nocache');
session_start();

function addToFile($archivo, $datum){ 
    $myJSON = json_encode($datum);
    $file = fopen($archivo, 'a+');
    fwrite($file, $myJSON."\n");
    fclose($file); 
}


    $type = $_POST['type'];
    $first = htmlspecialchars($_POST['first_name']);
    $last = htmlspecialchars($_POST['last_name']);  
    $id = $_POST["student_id"];         
    $level = $_POST['level'];
    $instrument = $_POST['instrument'];
    $location = $_POST['location'];
    $room = $_POST['room'];
    $time = $_POST['time'];
    $first2 = htmlspecialchars($_POST['first_name_2']);
    $last2 = htmlspecialchars($_POST['last_name_2']);
    $id2 = $_POST['student_id_2'];      



$archivo = 'data.txt';

if($type === "duet"){
    $myArr = array("type"=>$type,"name"=>$first, "lastname"=>$last, "id"=>$id, "level"=>$level,"instrument"=>$instrument, "location"=>$location, "room"=>$room, "time"=>$time);
    addToFile($archivo, $myArr);
    
    $myArr2 = array("type"=>$type,"name"=>$first2, "lastname"=>$last2, "id"=>$id2, "level"=>$level,"instrument"=>$instrument, "location"=>$location, "room"=>$room, "time"=>$time);
    addToFile($archivo, $myArr2);
}
else{
    $myArr = array("type"=>$type,"name"=>$first, "lastname"=>$last, "id"=>$id, "level"=>$level,"instrument"=>$instrument, "location"=>$location, "room"=>$room, "time"=>$time);
    addToFile($archivo, $myArr);
}



$d= array();
$datos = file($archivo);
foreach($datos as $dato){
    $d[]= json_decode($dato);
    }
echo json_encode($d);


//$output = "<table><tr><th>Type</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Level</th><th>Instrument</th><th>Loaction</th><th>Time</th></tr>";
//$output= $output."<tr><td>".$type."</td><td>".$first."</td><td>".$last."</td><td>".$id."</td><td>".$level."</td><td>".$instrument."</td><td>".$location."</td><td>".$time."</td></tr>";
//echo $output;
?>
