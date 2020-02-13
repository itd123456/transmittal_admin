<?php

	require('database.php');

	$db = new Database();

	$track_no = $_POST['trackno'];
	$branch = $_POST['branch'];
	$item = json_decode($_POST['item'], true);

	$track = "INSERT INTO trans_list(track_no, branch)
			  VALUES('$track_no', '$branch')";

	$db->execQuery($track);

	$getMax = "SELECT MAX(id) as id
			FROM trans_list";

	$max = $db->getMax($getMax);

	$count = count($item);

	for ($i = 0; $i < $count; $i++)
	{
		$id = $max[0]['id'];
		$particular = $item[$i]['particular'];
		$from = $item[$i]['from'];
		$to = $item[$i]['to'];

		$sql = "INSERT INTO item_list(id, particular, part_from, part_to)
				VALUES($id, '$particular', '$from', '$to')";

		$db->execQuery($sql);
	}

?>