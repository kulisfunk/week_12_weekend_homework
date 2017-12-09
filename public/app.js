var app = function(){
  console.log('app running');
var url = "https://api.nasa.gov/planetary/apod?api_key=vtn8biNvmVkMX5wFK7NVaptFQTDijsOEI18PBdLx"
 makeRequest(url, requestComplete);


}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}




window.addEventListener('load', app);
