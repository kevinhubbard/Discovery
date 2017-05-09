// $(document).ready(function(){

// 	$('#submit').on('click',  getAllFields);
// 	event.preventDefault();
// 	function Data (name, activity, address, city, state, zip, catagory){
// 		this.name = name,
// 		this.activity = activity,
// 		this.address = address,
// 		this.city = city,
// 		this.state = state,
// 		this.zip = zip,
// 		this.catagory = catagory
// 	}

	

// 	function getAllFields() {

// 		var user = new Data($('#name').val(), $('#activity').val(), $('#address').val(), $('#city').val(), $('#state').val(), $('#zip').val(), $('#catagory').val());

// 		$('#name').val('');
// 		$('#activity').val('');
// 		$('#address').val('');
// 		$('#city').val('');
// 		$('#state').val('');
// 		$('#zip').val('');
// 		$('#catagory').val('');

// 		console.log(user.name + '\n' + user.activity + '\n' + user.address + '\n' + user.city + '\n' + user.state + '\n' + user.zip + '\n' + user.catagory);

// 		$.post('/api', user, function(res){
// 			console.log(res);
// 			console.log("test");
// 		});
// 	}
// });