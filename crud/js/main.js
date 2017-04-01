
$(function() {

    //setDefault();

    function setDefault(){
        $("#name").val("Eva");
        $("#fromEmail").val("Evangelina@Gmail.com");
        $("#phone").val("1234567890");
        
        $("#subject").val("EvaSubject");
        $("#message").val("EvaMessage- The Quick Brown Fox Jumps Over The Lazy Dog");
    }
    
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});//End of Send cd-main-nav Click

    $('.cd-main-nav li a').on('click', function(event){
        $('.cd-main-nav').find('ul').toggleClass('is-visible');
    });//End of Send cd-main-nav Click


	//Send Email
    $("#sendButton").click(function() {
        $('#success').text("Sending message...");
        var name = $("#name").val();
    	var fromEmail = $("#fromEmail").val();
        var subject = $("#subject").val();
    	var message = $("#message").val();
  
        $.ajax({
            type: "POST",
            url: "php/email/contact.php",
            data: "name=" + name + "&fromEmail=" + fromEmail + "&subject=" + subject + "&message=" + message,
        	success : function(serverResponse){
                if (serverResponse == "success"){
                    clearFlields();
                    $('#success').addClass("alert-success").text("Email sent successfully...");
                    //alert();
                } else {
                    $('#success').addClass("alert-danger").text("Email Not sent ..." + serverResponse);
                    //alert("Email NOT sent. " + serverResponse);
                }
	        }
        });
        return false;
    });//End of Send button Click

    function clearFlields(){
        $("#name").val("");
        $("#fromEmail").val("");
        $("#phone").val("");
        $("#subject").val("");
        $("#message").val("");
    }

    $(".cd-main-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } // End if
    });
});

