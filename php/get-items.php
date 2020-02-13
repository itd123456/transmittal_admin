<?php

	require('database.php');

	$db = new Database();

	$sql = "SELECT t.track_no, t.branch,t.date, t.status, t.date_received, i.particular, i.part_from, i.part_to
			FROM trans_list t
			JOIN item_list i
			ON t.id = i.id";

	$db->fetchAll($sql);

?>