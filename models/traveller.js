const Traveller = function(journeys) {
  this.journeys = journeys;
};


Traveller.prototype.getJourneyStartLocations = function() {
  let startLocations = [];
  this.journeys.map(journey => {
    startLocations.push(journey.startLocation);
  });
  return startLocations;
};


Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = [];
  this.journeys.map(journey => {
    endLocations.push(journey.endLocation);
  });
  return endLocations;
};


Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeysByTransport = [];
  this.journeys.filter( journey => {
    if(journey.transport === transport){
      journeysByTransport.push(journey);
    }
  });
  return journeysByTransport;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  journeyList = [];
  this.journeys.filter(journey => {
    if(journey.distance > minDistance){
      journeyList.push(journey);
    }
  });
  return journeyList;
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce( (totalDistance, journey ) =>{
    return totalDistance + journey.distance;
  }, 0 );
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  // Citation (unique function)
  // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  const transportTypesList = [];
  this.journeys.map(journey => {
    transportTypesList.push(journey.transport);
  });

  const uniqueTransports = transportTypesList.filter(unique);
  return uniqueTransports;
};


Traveller.prototype.calculateTotalDistanceTravelled = function(){
  return this.journeys.reduce( (totalDistance, journey ) =>{
    return totalDistance + journey.distance;
  }, 0 );
};


module.exports = Traveller;
