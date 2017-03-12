<?php
if (isset($_POST['submit'])) {
    console.log("Imageuploader-1-PHP---------------");  
    
    if(count($_FILES['uploads']['filesToUpload'])) {
        foreach ($_FILES['uploads']['filesToUpload'] as $file) {
            
            //do your upload stuff here
            echo $file;
            
        }
    }
}
?>