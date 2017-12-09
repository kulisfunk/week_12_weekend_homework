var app = function(){
  console.log('app running');
// var url = "https://api.nasa.gov/planetary/apod?api_key=vtn8biNvmVkMX5wFK7NVaptFQTDijsOEI18PBdLx"
var url = "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"
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
  var items = objectList.collection.items;
  console.log(items);
  populateSelect(items);

}

var populateSelect = function(items){
  var select = document.getElementById('picture-select');
  items.forEach(function(item){
    var option = document.createElement('option');
    option.innerText = item.data[0].title;
    select.appendChild(option);
  });
}
  // selectChanged(select.selectedIndex, recipes);//shows index 0 in list on page.......
  // select.addEventListener('change', function(){
  //   selectChanged(select.selectedIndex, recipes);
  // }.bind(this));



window.addEventListener('load', app);


// collection:
// items: 0-99
