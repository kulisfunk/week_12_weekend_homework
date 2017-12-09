var app = function(){
  console.log('app running');
// var url = "https://api.nasa.gov/planetary/apod?api_key=vtn8biNvmVkMX5wFK7NVaptFQTDijsOEI18PBdLx"
var url = "https://images-api.nasa.gov/search?q=apollo%2011"
 makeRequest(url, requestComplete);


}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status != 200){
    return;
  }
  var jsonString = this.responseText;
  var objectList = JSON.parse(jsonString);
  console.log(objectList);

}



window.addEventListener('load', app);


collection:
items: 0-99
