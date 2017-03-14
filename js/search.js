
$(function() {
	var keyWords = [];
    $(document).off("keyup.SEARCHKEYWORD").on("keyup.SEARCHKEYWORD", "#searchComponent .searchBox", function() { 
	  var keyWord = $( this ).val().toLowerCase();
	  $('#componentList a').removeClass("yellowBackground");
	  if(keyWord.length > 2){
		highlightComponent(keyWord);
	  }
	});
	
	
	function highlightComponent(keyWord){
		 var componentList = $('#componentList a, #gamestList a, #appList a');
		 for(var i=0; i < componentList.length; i++){
			var thisComponent = componentList[i];
			var thisComponentText = $(thisComponent).text();
			if(thisComponentText.toLowerCase().indexOf(keyWord) > -1){
				$(thisComponent).removeClass("yellowBackground").addClass("yellowBackground");
				keyWords.push(keyWord);
			}else{
				$(thisComponent).removeClass("yellowBackground");
			}
		 }
	}
	
	
});//End of DocReady