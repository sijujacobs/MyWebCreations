<?php
	$toEmail      = 'admin@malankaracatholicedmonton.org';
	$errorMSG = "";

	if (empty($_POST["name"])) {
		$errorMSG = "Name is required";
	} else {
		$name = $_POST["name"];
		// check if name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$errorMSG = "Only letters and white space allowed"; 
		}
	}

	if (empty($_POST["fromEmail"])) {
		$errorMSG = "Email is required";
	} else {
		$fromEmail = $_POST["fromEmail"];
		// check if e-mail address is well-formed
		if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
			$errorMSG = "Invalid email format"; 
		}
	}

	$subject = $_POST["subject"];

	if (empty($_POST["message"])) {
		$errorMSG = "Message is required";
	} else {
		$message = $_POST["message"];
	}

	if ($errorMSG == ""){
   		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers = "From: Website-Guest@malankaracatholicedmonton.org\n";
		$headers .= "Reply-To: $fromEmail";	
		if(mail($toEmail, $subject, $message, $headers)){
			echo "success";
		  	exit;
		}
	}else{
	    echo $errorMSG;
	}
	
?>