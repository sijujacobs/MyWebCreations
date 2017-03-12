<?php
$valid_formats = array("jpg", "png", "gif", "zip", "bmp");
$max_file_size = 1024*300; //300 kb
//$path = "mcmImageGallery/"; // Upload directory
$path = $_SERVER['DOCUMENT_ROOT'] ."/imageGallery/" . basename($_FILES['files']['name'] );
$count = 0;

if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
    // Loop $_FILES to exeicute all files
    foreach ($_FILES['files']['name'] as $f => $name) {  
    echo "Imageuploader-000-PHP----------------------";   
        if ($_FILES['files']['error'][$f] == 4) {
            continue; // Skip file if any error found
             echo "Imageuploader-1-PHP-----------ERROR----------";
        }          
        if ($_FILES['files']['error'][$f] == 0) {              
            if ($_FILES['files']['size'][$f] > $max_file_size) {
                $message[] = "$name is too large!.";
                echo "Imageuploader------$name is too large!.-----";
                continue; // Skip large files
            }
            elseif( ! in_array(pathinfo($name, PATHINFO_EXTENSION), $valid_formats) ){
                $message[] = "$name is not a valid format";
                echo "Imageuploader-1-PHP-----------$name is not a valid format-----------";
                continue; // Skip invalid file formats

            }
            else{ // No error found! Move uploaded files 
                if(move_uploaded_file($_FILES["files"]["tmp_name"][$f], $path.$name))
                $count++; // Number of successfully uploaded file
                echo "Imageuploader-1-PHP-----------SUCCESS----------" .$path.$name ;
                
            }
        }
    }
}
?>