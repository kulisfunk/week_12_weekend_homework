var app = function(){
  console.log('app running');
// var url = "https://api.nasa.gov/planetary/apod?api_key=vtn8biNvmVkMX5wFK7NVaptFQTDijsOEI18PBdLx"
// var url = "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"

var url = "https://images-api.nasa.gov/search?q=apollo%2010&description=moon&media_type=image"



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

  selectChanged(select.selectedIndex, items);//shows index 0 in list on page.......
  select.addEventListener('change', function(){
  selectChanged(select.selectedIndex, items);
  }.bind(this));
}

var selectChanged = function(index, items){
 var header = document.getElementById('picture-title');
 var link = document.getElementById('picture-link');
 var description = document.getElementById('picture-description');
 var image = document.getElementById('picture-image');
 var item = items[index];
 header.innerText = item.data[0].title;
 link.href = item.links[0].href;
 link.innerText = item.data[0].title;
 description.innerText = item.data[0].description;
//  var ingredients = recipe.ingredients.split(', ');
//  ingredients.forEach(function(ingredient){
//    var item = document.createElement('li');
//    item.innerText = ingredient;
//    list.appendChild(item);
//  });
 image.src = item.links[0].href;
 image.alt = item.data[0].title;
}



window.addEventListener('load', app);


// collection:
// items: 0-99
