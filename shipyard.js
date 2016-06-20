//YOUR CODE GOES HERE

var crewNames = ["Emily", "Keane", "Justin", "Frank", "Kat", "David", "Arber", "Linc", "Mia"]

var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    var person = { name: names[i] }
    crew.push(person);
  };
  return crew;
}

var crewMembers = trainCrew(crewNames);

var ship = {
  name: "Star Cruiser",
  propulsion: null,
  mountPropulsion: function(rocket) {
    this.propulsion = rocket;
    console.log("The engines were mounted");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("whooosh");
    } else {
      console.log("wam wam");
    }
  },
  crew: [],
  captain: function() {
    var number = this.crew.length;
    var randomNumber = Math.floor(Math.random() * number);
    return this.crew[randomNumber];
  },
  loadCrew: function(newCrew){
    for(var i = 0; i < newCrew.length; i++){
      this.crew.push(newCrew[i]);
      console.log(newCrew[i].name + " has boarded the ship.")
    }
  },
  fuelShip: function(amount) {
    this.propulsion.fuel += amount;
    console.log(amount + " fuel added");
    console.log("There is now " + this.propulsion.fuel + " in the tank");
  }
}

var rocket = {
  fuel: 0,
  fire: function() {
    if(this.fuel > 0) {
      this.fuel--;
      console.log("THE ENGINES HAVE FIRED!!!")
      console.log(this.fuel);
      return true;
    } else {
      console.log("THERE IS NOT ENOUGH FUEL!")
      return false;
    }
  }
}

var launchpad = function(spaceship, crew, rocket) {
  console.log("Hello " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Your captain is " + spaceship.captain().name);
  spaceship.mountPropulsion(rocket);
  spaceship.fuelShip(10);
  spaceship.takeoff();
};

launchpad(ship, crewMembers, rocket);
