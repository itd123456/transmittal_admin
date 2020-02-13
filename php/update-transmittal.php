<?php

	require('database.php');

	$db = new Database();

	$id = $_POST['id'];
	$track_no = $_POST['trackno'];
	$branch = $_POST['branch'];
	$item = json_decode($_POST['item'], true);

	$del = "DELETE FROM item_list
			WHERE id = $id";

	$db->execQuery($del);

	$up = "UPDATE trans_list
			   SET track_no = '$track_no', branch = '$branch'
			   WHERE id = $id";

	$db->execQuery($up);

	$count = count($item);
	
	for ($i = 0; $i < $count; $i++)
	{
		$particular = $item[$i]['particular'];
		$from = $item[$i]['from'];
		$to = $item[$i]['to'];

		$sql = "INSERT INTO item_list(id, particular, part_from, part_to)
				VALUES($id, '$particular', '$from', '$to')";

		$db->execQuery($sql);
	}
?>