var app = function(){
  console.log('app running');

var url = "https://images-api.nasa.gov/search?q=earth&description=&media_type=image"



 makeRequest(url, requestComplete);

 var searchButton = document.getElementById('search-button');

 searchButton.addEventListener('click', function() {
 			search();
 		});
 	}



var search = function(){
  var search1 = document.getElementById('search1').value;
  var search2 = document.getElementById('search2').value;
  var search3 = document.getElementById('search3').value;

  if (search3 === ''){
    var url = "https://images-api.nasa.gov/search?q=" + search1 + "&description=" + search2;
  }else{
  var url = "https://images-api.nasa.gov/search?q=" + search1 + "&description=" + search2 + "&media_type=" + search3;
}
console.log(url);
  makeRequest(url, requestComplete);
  document.getElementById('search1').value = '';
  document.getElementById('search2').value = '';
  document.getElementById('search3').value = '';
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
  var items = objectList.collection.items;
  if(items.length ===  0){
    return;
  }
  console.log("new stuff coming");
  console.log(items);
  populateSelect(items);

}

var populateSelect = function(items){
  var select = document.getElementById('picture-select');
  select.options.length = 0;
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
 image.src = item.links[0].href;
 image.alt = item.data[0].title;
}






window.addEventListener('load', app);
