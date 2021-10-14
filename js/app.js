var products = JSON.parse(localStorage.getItem('products'));
if (products === null) {
	products = [];
}

console.log(products[0]);

function fillTable(array) {
	if(array.length > 0) {
		$('#table').removeClass('invisible');
		let rows = '';
		array.forEach(function(item){
			rows +='<tr>'+
				'<td><img src="'+item.image+'" class="image-thumbnail" alt="..."></td>'+
				'<td>'+ item.title +'</td>'+
				'<td>'+ item.category +'</td>'+
				'<td>'+ item.description +'</td>'+
				'<td>'+ item.price +'</td>'+
				'</tr>'
		});
		$('table tbody').html(rows);
		$('#table').addClass('invisible');
	} else {
		$('#table').addClass('invisible');
		$('#nerasta_alert').removeClass('invisible');
	}
}

fillTable(products);

$(function() {
	$('#search').click(function() {
		const search = $('#searchText').val();
		let filteredArray = products.filter(p => p.title.includes(search)
												 || p.description.includes(search)
												 || p.category.includes(search));
		console.log('Rastas produktu kiekis: ' + filteredArray.length);
		fillTable(filteredArray);
	});
});
