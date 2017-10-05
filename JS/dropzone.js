$(function() {

    try {  

        /* Dropzone logic */
        $('#dropzone input').on('change', function(e) {

            var reader = new FileReader();

            reader.readAsText(this.files[0]);

            reader.onload = function(e) {

                alert(e.target.result) // data of the droped .txt file

            };
        });

        /* Dropzone hover */
        $('#dropzone').on('dragover', function() {
            $(this).addClass('hover');
        });

        $('#dropzone').on('dragleave', function() {
            $(this).removeClass('hover');
        });

    }
    catch(error) {
        alert('shithappns');
    }

});