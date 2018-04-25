var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)


  var markerImage = new google.maps.MarkerImage('images/pint1.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(15, 15),
                new google.maps.Point(30, 30));
    
    var icon = {
    url: "images/pint1.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    
};
    


  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: icon,
    animation: google.maps.Animation.DROP
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='penoos'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}

function showStadium() {
createMarker(34.0739,-118.2400, "<h1>Dodgers Stadium</h1> <img src='images/dodgers.jpeg'> <p>is a baseball park located in the Elysian Park neighborhood of Los Angeles, </p>")

createMarker(33.8003,-117.8827, "<h1>Angel Stadium</h1> <img src='images/angels.jpg'> <p>a modern-style ballpark located in Anaheim, California.</p>")

createMarker(33.967055,-118.414921, "<h1>George C. Page Stadium</h1> <img src='images/george.jpg'> <p>It is home to the Loyola Marymount Lions baseball team of the NCAA's Division I West Coast Conference.</p>")

createMarker(37.7786,-122.3893, "<h1>AT&T park</h1>   <p>it has served as the home of the San Francisco Giants, the city's Major League Baseball franchise.</p>")

createMarker(34.0973,-117.2963, "San Manuel Stadium")
createMarker(32.7077,-117.1569, "PETCO Park")
createMarker(33.8185,-116.5259, "Palm Springs Power")
createMarker(34.0593,-118.4593, "Jackie Robinson Stadium")
createMarker(37.7516,-122.2005, "Oakland Alameda Coliseum")
createMarker(34.5548,-117.4017, "Adelanto Stadium")
createMarker(37.6223, -121.0009, "John Thurman Field")
createMarker(33.6539, -117.3033, " Lake Elsinore Diamond")
createMarker(37.9551,-121.2974, "Banner Island Ballpark")

createMarker(32.7742,-117.0787, "<h1>Tony Gwynn Stadium</h1> <img src='images/tony.jpg'> <p>the home field of the San Diego State University Aztecs college baseball team. In addition, the San Diego Surf Dawgs of the independent Golden Baseball League used the park as their home field</p>")

createMarker(34.7028,-118.1730, "<h1>The Hangar Stadium</h1><img src='images/hangar.jpg'><p> home to the Lancaster JetHawks minor league team.</p>")

}


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.1478, lng:  -118.1445}, 
    zoom: 8
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })
showStadium()
}
