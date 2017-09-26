//back
function Movie(name, newrelease, rating) {
  this.name = name
  this.newrelease = newrelease
  this.rating = rating
};

Movie.prototype.priceAmount = function(time, age) {
  var price = 12.99;
  if (this.newrelease) {
    price += 2;
  }
  if (time >= 1200 && time <= 1500) {
    return price -= 5;
  }
  if (age <= 12) {
    return price -= 3
  } else if (age >12 && age <= 63) {
    return price;
  } else {
    return price -= 2;
  }
}

//front
$(document).ready(function() {

  var movies = [
    new Movie("Titanic", false, "PG13"),
    new Movie("Terminator", true, "R"),
    new Movie("Lion King", false, "G"),
    new Movie("Lego Ninjago Movie Ultimate Edition", true, "G"),
    new Movie("The Chronicles of Narnia 3D!", false, "PG"),
    new Movie("Deadpool", true, "R"),
    new Movie("Fantastic Mr. Fox", false, "PG"),
    new Movie("Ghost in the Shell", true, "PG13"),
    new Movie("Matrix", false, "R"),
    new Movie("Last Tango Paris", false, "NC17"),
    new Movie("Nausicaä of the Valley of the Wind", false, "PG"),
    new Movie("Show Girls", false, "NC17"),
    new Movie("Club Penguin the Movie", true, "R"),
    new Movie("The Big Sick", true, "R")
  ]

  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    $("#movieName").append(`<option name="movies" value="`+ i +`">` + movie.name + " ["+ movie.rating +"]</option>")
  }

  $("form").submit(function(event){
    event.preventDefault();
    var movie = movies[$("#movieName").val()];
    var age = parseInt($("#age").val());
    var time = parseInt($("#time").val());
    var output;
    if (/[^\d]/.test(age)){
      output = "Please Enter a Valid Age!";
    } else {
      var ratings = {
        G: 0,
        PG: 0,
        PG13: 13,
        R: 17,
        NC17: 170
      }
      if (age < ratings[movie.rating]) {
        output = "You do not meet the age requirements for this movie!";
      } else {
        output = "Your movie ticket will cost: " + movie.priceAmount(time, age) + "$. Enjoy the show!"
      }
    }
    $("#output").text(output);
  });
});
