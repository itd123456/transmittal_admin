// Call the dataTables jQuery plugin
$(document).ready(function() 
{
  var t =  $('#dataTable').DataTable();

  $.ajax(
  	{
  		type : "POST",
  		url : './php/get-data.php',
  		data : {stat : false},
  		dataType : "json",
  		success : function(data)
  		{
  			var datas = data;
  			var length = datas.length;

  			for (var i = 0; i < length; i++)
  			{
  				var trackno = datas[i]['track_no'];
  				var branch = datas[i]['branch'];
  				var date = datas[i]['date'];
  				var status = datas[i]['status'];
  				var id = datas[i]['id'];

  				t.row.add(
  				[
  					trackno,
  					branch,
  					date,
  					'<button style="width:100%" class="btn btn-secondary" data-toggle="modal" data-target=".editModal" id="edit" name="edit" onclick="edit('+id+')"><i class="fas fa-pencil-alt"></i>&nbspEdit</button><button class="btn btn-info" data-toggle="modal" data-target=".remarksModal" style="width:100%; height:15%" onclick="remark('+id+')"><i class="fa fa-eye"></i>&nbspView</button>'
  				]).draw( false );
  			}
  		}
  	});
});

function remark(id)
{
	edit_id = id;

	$.ajax(
	{
		type : "POST",
		url : './php/get-specific-data.php',
		data : {id : id},
		dataType : "json",
		success : function(data)
		{
			trackno = data[0]['track_no'];
			branch = data[0]['branch'];
			date = data[0]['da_te'];

			$('#transaction_view').text(trackno);
			$('#branch_view').text(branch);
			$('#date_view').text(date);
			length = data.length;

			for (var i = 0; i < length; i++)
  			{
  				var particular = data[i]['particular'];
  				var from = data[i]['part_from'];
  				var to = data[i]['part_to'];

  				var jsonData = 
  				{
  					particular : particular,
  					from : from,
  					to : to
  				}
  				
  				$('#view_particular_table tbody').append('<tr><td>' + particular + '</td><td>' + from + '</td><td>' + to + '</td><tr>');
  			}

  			edit_string_data = JSON.stringify(edit_data);
		}
	})
}

$('#view_close').on('click', function()
{
	$('#view_tbody').children('tr').remove();
});

$('#view_times').on('click', function()
{
	$('#view_tbody').children('tr').remove();
});

var edit_data = [];
var edit_string_data = '';
var edit_id = '';

function edit(id)
{
	edit_id = id;

	$.ajax(
	{
		type : "POST",
		url : './php/get-specific-data.php',
		data : {id : id},
		dataType : "json",
		success : function(data)
		{
			trackno = data[0]['track_no'];
			branch = data[0]['branch'];

			$('#edit_track').val(trackno);
			$('#edit_branch').val(branch);
			length = data.length;

			for (var i = 0; i < length; i++)
  			{
  				var particular = data[i]['particular'];
  				var from = data[i]['part_from'];
  				var to = data[i]['part_to'];

  				var jsonData = 
  				{
  					particular : particular,
  					from : from,
  					to : to
  				}

  				edit_data.push(jsonData);
  				
  				$('#edit_particular_table tbody').append('<tr><td>' + particular + '</td><td>' + from + '</td><td>' + to + '</td><td>' +
			  	'<button type="button" class="btn btn-danger" onclick="delete_row(this)"><i class="fa fa-trash" aria-hidden="true"></i>&nbspDelete</button>');
  			}

  			edit_string_data = JSON.stringify(edit_data);
		}
	})
}

$('#edit_trans').on('click', function()
{
	 trackno = $('#edit_track').val();
	 branch = $('#edit_branch').val();

	 if (!trackno)
	 {
	 	trackno = 'Pending';
	 }

	 if (!branch)
	 {
	 	branch = 'Unknown Branch';
	 }

	 data = 
	 {
	 	trackno : trackno,
	 	branch : branch,
	 	item : edit_string_data,
	 	id : edit_id
	 }
	 
	$.ajax(
 	{
 		type : "POST",
 		url : './php/update-transmittal.php',
 		data : data,
 		dataType : "",
 		success : function()
 		{
 			location.reload();
 		}
 	});
});

$('#edit_particular').on('click', function()
{
	particular = $('#edit_part').val();
	from = $('#edit_from').val();
	to = $('#edit_to').val();

	obj = 
	{
		particular : particular,
		from : from,
		to : to
	}

	edit_data.push(obj);
	edit_string_data = JSON.stringify(edit_data);

	table = $('#edit_particular_table tr:last').after('<tr><td>' + particular + '</td><td>' + from + '</td><td>' + to + '</td><td>' +
			  '<button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="fa fa-trash" aria-hidden="true"></i>&nbspDelete</button>');
	$('#edit_part').val('');
	$('#edit_from').val('');
	$('#edit_to').val('');
});

function delete_row(i)
{
	var r = i.parentNode.parentNode.rowIndex;
	document.getElementById('edit_particular_table').deleteRow(r);

	edit_data.splice(r-1, 1);
	edit_string_data = JSON.stringify(edit_data);
}

$('#edit_close').on('click', function()
{
	edit_data = [];
	edit_string_data = '';
	$('#edit_tbody').children('tr').remove();
});

$('#times_close').on('click', function()
{
	edit_data = [];
	edit_string_data = '';
	$('#edit_tbody').children('tr').remove();
});

var part_data = [];
var string_data = '';

$('#particular').on('click', function()
{
	particular = $('#add_part').val();
	from = $('#add_from').val();
	to = $('#add_to').val();

	obj = 
	{
		particular : particular,
		from : from,
		to : to
	}

	part_data.push(obj);
	string_data = JSON.stringify(part_data);

	$('#particular_table tbody').append('<tr><td>' + particular + '</td><td>' + from + '</td><td>' + to + '</td><td>' +
			  	'<button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="fa fa-trash" aria-hidden="true"></i>&nbspDelete</button>');
	
	$('#add_part').val('');
	$('#add_from').val('');
	$('#add_to').val('');
});

function deleteRow(i)
{
	var r = i.parentNode.parentNode.rowIndex;
	document.getElementById('particular_table').deleteRow(r);

	part_data.splice(r-1, 1);
	string_data = JSON.stringify(part_data);
}

$('#save_trans').on('click', function()
{
	 trackno = $('#add_track').val();
	 branch = $('#add_branch').val();

	 if (!trackno)
	 {
	 	trackno = 'Pending';
	 }

	 if (!branch)
	 {
	 	branch = 'Unknown Branch';
	 }

	 data = 
	 {
	 	trackno : trackno,
	 	branch : branch,
	 	item : string_data
	 }
	 
	$.ajax(
 	{
 		type : "POST",
 		url : './php/save-transmittal.php',
 		data : data,
 		dataType : "",
 		success : function()
 		{
 			location.reload();
 		}
 	});
});

$('#add_close').on('click', function()
{
	$('#add_track').val('');
	$('#add_branch').val('');
	$('#add_part').val('');
	$('#add_from').val('');
	$('#add_to').val('');
	part_data = [];
	string_data = '';
	$('#add_tbody').children('tr').remove();
});

$('#time_close').on('click', function()
{
	$('#add_track').val('');
	$('#add_branch').val('');
	$('#add_part').val('');
	$('#add_from').val('');
	$('#add_to').val('');
	part_data = [];
	string_data = '';
	$('#add_tbody').children('tr').remove();
});