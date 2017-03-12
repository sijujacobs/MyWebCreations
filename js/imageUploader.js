$(function(){
	//console.log("--------imageUploaderJS-----");
	$("#file").on('change', function(){
		var countFiles =  $(this)[0].files.length;
		var imgPath = $(this)[0].value;
		var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

		var imageHolder = $("#imageHolder");
		$(imageHolder).empty();
		if(extn === 'jpg' || extn === 'jpeg' || extn === 'png'){
			if(typeof(FileReader) != "undefined"){
				for(var i=0; i < countFiles; i++){
					var reader = new FileReader();
					reader.onload = function(e){
						$("<img/>", {
							"src":e.target.result,
							"class":"thumb-image"
						}).appendTo(imageHolder)
					}
					imageHolder.show();

					reader.readAsDataURL($(this)[0].files[i]);
				}

			}else{
				alert("This browser does not support FileReader");
			}
		}else{
			alert("Please select only images....");
		}
	});
});