$(function() {

    try {  

        /* Dropzone logic */
        $('#dropzone Input[name=file]').on('change', function(e) {
            
            var textType = /text.*/;
            var file = e.target.files[0];
            
            if (file.type.match(textType)) {
                
                this.form.fileName.value = file.name;
                
                var reader = new FileReader();

                reader.readAsText(file);

                reader.onload = function(e) {
                    alert(e.target.result); // data of the droped .txt file
                };

            } else {
                alert("File not supported!");
            }

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