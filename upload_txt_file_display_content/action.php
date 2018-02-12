<?php

if( isset($_FILES['file']) && !empty($_FILES['file']['name'])){

	$fileName = basename($_FILES['file']['name']);

	if(move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/'.$fileName)){


		$handle = fopen('uploads/'.$fileName,'r');

		echo "The content of this txt file is : <br>";

		while (($line = fgets($handle, 1024)) !== false) {

			echo $line.'<br>';
		}

	}else{

		echo "Sorry, File cant be uploaded.";
	}

}else{
	header('location:index.php');
}
?>
<br><hr>
<a href="index.php">Go Back</a>
