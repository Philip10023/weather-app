const request = require('request')
var geocodeAddress = (address, callback) => {
  var encodedURI = encodeURIComponent(address)

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}`,
    json: true
  }, (error, response, body) => {
    //pretty print json in terminal
    //console.log(JSON.stringify(body, undefined, 2));
    if (error) {
      callback('Unable to connect to Google servers')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('I could not find that address :(')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};
module.exports.geocodeAddress = geocodeAddress;
