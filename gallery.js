$(document).ready(function() {
	var currentIndex = 0;
	var images = $('.thumbnail img');

	$('.thumbnail').click(function() {
		currentIndex = $(this).index();
		showLightbox();
	});

	$('.close').click(function() {
		hideLightbox();
	});

	$('.prev').click(function() {
		showImage(currentIndex - 1);
	});

	$('.next').click(function() {
		showImage(currentIndex + 1);
	});

	function showLightbox() {
		showImage(currentIndex);
		$('#lightbox').fadeIn();

		$(document).on('keydown', function(e) {
			if (e.keyCode === 37) {
				showImage(currentIndex - 1); // Previous image on left arrow key
			} else if (e.keyCode === 39) {
				showImage(currentIndex + 1); // Next image on right arrow key
			}
		});
	}

	function hideLightbox() {
		$('#lightbox').fadeOut();
		$(document).off('keydown');
	}

	function showImage(index) {
		if (index < 0) {
			index = images.length - 1;
		} else if (index >= images.length) {
			index = 0;
		}
		var src = images.eq(index).attr('src');
		var alt = images.eq(index).attr('alt');
		$('#lightbox-content').html('<img src="' + src + '" alt="' + alt + '">');
		currentIndex = index;
	}
});
