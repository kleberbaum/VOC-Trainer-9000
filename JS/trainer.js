$(function() {

    try {
        //get
        var cookies = {};
        document.cookie.split('; ').forEach(function(item) {
            cookies[item.split('=')[0]] = item.split('=')[1];
        });

        /* Dropzone logic */
        $('#dropzone Input[name=file]').on('change', function(e) {

            var textType = /text.*/;
            var file = e.target.files[0];

            if (file.type.match(textType)) {

                this.form.fileName.value = file.name;

                var reader = new FileReader();

                reader.readAsText(file);

                reader.onload = function(e) {
                        var voc=e.target.result

                        alert(e.target.result)
                    }
                }

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
