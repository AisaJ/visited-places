//Business Logic
function Place(country,city,location,date){
  this.country = country;
  this.city = city;
  this.location = location;
  this.date = date;
};
Place.prototype.thePlace =function(){
  return this.country + "-" + this.location;
};
//UI logic
$(document).ready(function(){
  $("form#form-input").submit(function(event){
    event.preventDefault();
    var countryInput = $("#country").val();
    var cityInput = $("#city").val();
    var locationInput = $("#location").val();
    var dateInput = $("#date").val();

    var recentPlace =  new Place (countryInput,cityInput,locationInput, dateInput);

    $("#placeslist").append("<li> <span class='list'>"+ recentPlace.thePlace()+ "</span></li>");

    $(".list").last().click(function(){
      $("#all-details").fadeIn(5000);
      $(".printCountry").text(recentPlace.country);
      $(".printCity").text(recentPlace.city);
      $(".printLocation").text(recentPlace.location);
      $(".printDate").text(recentPlace.date);
    });
  });

});
