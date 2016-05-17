<?php
	if(isset($_POST['submit'])) {
		$headers = "From: frybabiescontacts@gmail.com\r\n";
		$msg = 'Name:  ' . $_POST['name'] . "\n"
				.'Email:   ' .$_POST['email'] . "\n"
				.'Message:   ' .$_POST['comment'];header('Location: /index.html');
		mail('pfluegelcx@gmail.com', 'Contact from FRYbabies.com',$msg,$headers);
		header('Location: /index.html');
	}else {
		header('location: index.html');
		exit(0);
	}
	
?>