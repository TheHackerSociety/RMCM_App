DistanceCalc = {
  _loc: {},

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
      return Number(distance);
    }
  }
}
