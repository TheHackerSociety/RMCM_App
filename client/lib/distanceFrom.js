DistanceCalc = {
  _loc: {},

<<<<<<< HEAD
  let latLng = Geolocation.latLng();
  if(latLng){
    let meters = geolib.getDistance(
        {
          latitude: latLng.lat,
          longitude: latLng.lng
        },
        {
          latitude: loc.latitude,
          longitude: loc.longitude
      });
    let distance = meters * 0.000621371;
    distance = distance.toFixed(2);
    return Number(distance);
=======
  setLocation: function( loc ){
    this._loc = loc;
  },

  distance( loc ){
    let latLng = Geolocation.latLng();
    if(latLng){
      let meters = geolib.getDistance(
          {
            latitude: latLng.lat,
            longitude: latLng.lng
          },
          {
            latitude: loc.latitude,
            longitude: loc.longitude
        });
      let distance = meters * 0.000621371;
      distance = distance.toFixed(2);
      return distance;
    }
>>>>>>> aed60b6e0e75f6063737a5a1359698096e94de33
  }
}
