$(document).ready(function() 
{
  var t =  $('#searchTable').DataTable();

  $.ajax(
  	{
  		type : "POST",
  		url : './php/get-items.php',
  		data : "",
  		dataType : "json",
  		success : function(data)
  		{
  			var length = data.length;

  			for (var i = 0; i < length; i++)
  			{
  				var trackno = data[i]['track_no'];
  				var branch = data[i]['branch'];
  				var date = data[i]['date'];
  				var status = data[i]['status'];
          if (status == '0')
          {
            status = 'In Transit';
          }
          else
          {
            status = 'Delivered';
          }
  				var date_received = data[i]['date_received'];
          var particular = data[i]['particular'];
          var part_from = data[i]['part_from'];
          var part_to = data[i]['part_to'];

  				t.row.add(
  				[
  					trackno,
  					branch,
            particular,
            part_from,
            part_to,
  					date,
  					date_received,
            status
  				]).draw( false );
  			}
  		}
  	});
});