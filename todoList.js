$("form").submit(function(e) {
  var red = "";
  red += "<tr>";
  red += "<td class='col-xs-6' id='txt-input'>";
  red += $("#txt-input").val();
  red += "</td>";
  red += "<td class='col-xs-1 columns'>";
  red += "<input type='checkbox' id='check' class='checkbox-size'>";
  red += "</td>";
  red += "<td class='col-xs-1 columns'>";
  red += "<img src='https://i.imgur.com/Dnl2hhP.png' height='20' id='deleted'>";
  red += "</td>";
  red += "</tr>";
  
  $("tbody").append(red);
  $("#txt-input").val("");
  e.preventDefault();
});

$("table").on("click", "#check", function() {
  if($(this).is(":checked")) {
    $(this).parent().parent().addClass("green");
  }
  else {
    $(this).parent().parent().removeClass("green");
  }
});

$("table").on("click","#deleted",function() {
  $(this).parent().parent().remove();
});





