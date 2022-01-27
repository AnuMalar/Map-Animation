const busStops = [
  [ 77.3411,11.1085],
  [77.3267,11.0570],
  [ 77.2852,10.9956],
  [77.1842,11.0175],
  [77.1246, 11.0254]
];
 
 
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoidmlub3RoOTM2MSIsImEiOiJja3hlNmZlaTM0enMzMndsYWYwc2g5N214In0.wvqtVn5uf_7peJVognw6Kw';
 
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center:   [ 77.3411,11.1085],

   zoom: 11,
});
 
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker =new mapboxgl.Marker()
    .setLngLat([ 77.3411,11.1085])
    .addTo(map);
    
 
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(()=>{
    if(counter>=busStops.length)
    return;
    marker.setLngLat(busStops[counter]);
    counter++;
  move()},2000)
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}