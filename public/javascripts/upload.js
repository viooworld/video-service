$('.upload-btn').on('click', function() {
    $('#upload-input').click();
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});

$('#upload-input').on('change', function() {
  var file = $(this).get(0).files[0];
  if (file != null) {
    // File selected, perform the upload

    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();
    // loop through all the selected files
    formData.append('upload[]', file, file.name);

    $.ajax({
	  url: '/upload',
	  type: 'POST',
	  data: formData,
	  processData: false,
	  contentType: false,
	  success: function(data){
	      console.log('upload successful\n' + data);
	  },
	  xhr: function() {
	  	// create XMLHttpRequest
	  	var xhr = new XMLHttpRequest();

	  	// listen to 'progress'
	  	xhr.upload.addEventListener('progress', function(evt) {

	  		if (evt.lengthComputable) {
	  			// math for upload percentage
	  			var percentComplete = evt.loaded / evt.total;
	  			percentComplete = parseInt(percentComplete * 100)

	  			// update Bootstrap progress

	  			$('.progress-bar').text(percentComplete + '%');
	  			$('.progress-bar').width(percentComplete + '%');

	  			// once the upload reaches 100%, set progress to done

	  			if (percentComplete == 100) {
	  				$('.progress-bar').html('Done')
	  			}
	  		}

	  	}, false);

	  	return xhr;

	   }
	});
  }
});

