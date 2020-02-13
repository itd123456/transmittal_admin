<?php

	require('database.php');

	$database = new Database();

	$id = $_POST['id'];

	$sql = "SELECT t.track_no, t.branch, i.particular, i.part_from, i.part_to, 
				   DATE_FORMAT(date, '%W, %e %M %Y') as da_te
			FROM trans_list t
			JOIN item_list i
			ON t.id = i.id
			WHERE t.id = $id";

	$data = $database->fetchAll($sql);

?>