// Call the dataTables jQuery plugin
$(document).ready(function() 
{
  var t =  $('#deliveredTable').DataTable();

  $.ajax(
  	{
  		type : "POST",
  		url : './php/get-data.php',
  		data : {stat : true},
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
  				var date_received = datas[i]['date_received'];

  				t.row.add(
  				[
  					trackno,
  					branch,
  					date,
  					date_received,
            '<button class="btn btn-info" data-toggle="modal" data-target=".remarksModal" style="width:100%; height:15%" onclick="remark('+id+')"><i class="fa fa-eye"></i>&nbspView</button>'
  				]).draw( false );
  			}
  		}
  	});
});