$(document).ready(function() {
	$('#load-data').click(function() {
		let apiKey = 'lPES4lh2HWttUtMFaEEuWE3GDEq0JNPboLcaSygpiYGULhpBZviscwIx';
		let apiUrl = 'https://api.pexels.com/v1/curated?per_page=6';

		$.ajax({
			url: apiUrl,
			method: 'GET',
			headers: {
				'Authorization': apiKey
			},
			success: function(response) {
				let photos = response.photos;
				let content = '';

				for (let i = 0; i < photos.length; i++) {
					let photo = photos[i];
					content += '<div class="photo">';
					content += '<img src="' + photo.src.medium + '" alt="' + photo.photographer + '">';
					content += '</div>';
				}

				$('#content').html(content);
			},
			error: function() {
				$('#content').html('Error loading data.');
			}
		});
	});
});
