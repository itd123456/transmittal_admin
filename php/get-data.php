<?php

	require('database.php');

	$database = new Database();

	$stat = $_POST['stat'];

	$sql = "SELECT id, track_no, branch, status, DATE_FORMAT(date, '%W, %e %M %Y') AS date,
		    DATE_FORMAT(date_received, '%W, %e %M %Y') AS date_received
			FROM trans_list
			WHERE status = $stat";

	$record = $database->fetchAll($sql);
?>