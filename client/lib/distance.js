
Distance = function Distance( pos, pos2 ){
  var lat1 = pos.lat;
  var lat2 = pos2.lat2;
  var lng = pos.lng;
  var lng2 = pos.lng2;

  var R = 6371000; // metres

  var Radian = funciton( val ){ return (val * Math.PI) / 180; };

  console.log( lat1 );
  var φ1 = Radian( lat1 );
  var φ2 = Radian( lat2 );
  var Δφ = Radian( (lat2-lat1) );
  var Δλ = Radian( (lon2-lon1) );

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;
}
