$(document).ready(function () {
  // what we do
    $("#hide1").hide();
    $("#click1").click(function() {
      $("#show1").slideToggle(700);
      $("#hide1").slideToggle(600);
     
    });
    $("#hide2").hide();
    $("#click2").click(function() {
      $("#show2").slideToggle(700);
      $("#hide2").slideToggle(600);
     
    });
    $("#hide3").hide();
    $("#click3").click(function() {
      $("#show3").slideToggle(700);
      $("#hide3").slideToggle(600);
     
    });
    // portfolio
    $(".card").hover(function() {
      $(this).children(".card-1").fadeToggle(500, "linear");
    })
    $("#mc-embedded-subscribe").click(function(event){
      var person = document.getElementById("name").value;
      alert('Dear' + " " + person + " "+ 'we have received your message. Thank you for reaching out to us.');
      event.preventDefault();
    })
});



