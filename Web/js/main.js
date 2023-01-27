
document.getElementById('first').onclick = function() {
    window.location.href = './index.html#';
};

document.getElementById('second').onclick = function() {
    window.location.href = './page_2.html#';
  };

document.getElementById('third').onclick = function() {
    window.location.href = './page_3.html#';
};

document.getElementById('fourth').onclick = function() {
    window.location.href = './page_4.html#';
  };

document.getElementById('fifth').onclick = function() {
    window.location.href = './page_5.html#';
};


$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800);
});

$(window).scroll(function() { 
    let scrolled = $(window).scrollTop();

    if(scrolled > 350) { 
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

function saveMessage(){
	var message = document.getElementById("draft");
	localStorage.setItem("message", message.value)
  setInterval(saveMessage, 500);
}

window.addEventListener("DOMContentLoaded", loadMessage, false);
function loadMessage() {
	var textbox = document.getElementById("draft");
	var message = localStorage.getItem("message");
	if (!message) {
		textbox.value = "";
	}else {
		textbox.value = message;
	}
}

$(document).ready(function(){
    $(document).on("mousedown", function(event){
      if(event.which==3){
        $(".hidden").removeClass("shown");
  
        if($(event.target).is("img")){
          $(".hidden").addClass("shown");
        }
  
        console.log(event.pageX, event.pageY);
        $("#context").css({
          top: event.pageY,
          left: event.pageX
        })
        $("#context").fadeIn();
        return false;
      }
        $("#context").fadeOut();
 
    })
  
  
    $("[href='http://www.google.ru']").on("click",function(event){
      console.log("Переходите на Google?");
      return false;
    });
  
    $("#prepand, #append, #replace").on("click", function(e){
      var el = $(e.currentTarget);
      var action = el.attr("id");
  
      var content = $(".text").val();
  
      if(action == "prepand"){
        console.log("Prep");
        $("#main").prepend("<a href='#'>"+content+"</a>");
      }else if (action == "append"){
        console.log("App");
        $("#main").append(content);
      }else if (action == "replace"){
        console.log("Repl");
        $("#main").html(content);
      }
      $(".text").val("");
    });
  
  
    $("[data-trigger='dropdown']").on("mouseenter",function(){
      var submenu = $(this).parent().find(".submenu");
      submenu.fadeIn(300);
  
      $(".profile-menu").on("mouseleave",function(){
        submenu.fadeOut(300);
      })
    });
  })
