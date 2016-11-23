<?php
	header('Content-Type: application/json');

	$uploaded = array();

	if(!empty($_FILES['file']['name'][0])){

		$count = 0;
		$filesize = filesize($_FILES['file']['tmp_name'][$count]);

		foreach($_FILES['file']['name'] as $position => $name){
			if(move_uploaded_file($_FILES['file']['tmp_name'][$position], 'uploads/' . $name)){
				$uploaded[] = array(
					'type' => pathinfo($name,PATHINFO_EXTENSION),
					'size' => $filesize,
					'name' => $name,
					'file' => 'uploads/' . $name
					);
			}
		}
	}

	echo json_encode($uploaded);
