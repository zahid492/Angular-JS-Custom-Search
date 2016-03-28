'use strict';

app.filter('customeSearch', function() {
  return function(data,searchkey) {
  	if(!searchkey){
  		return data;
  	}
    var searchresult = [];
    for (var i=0; i<data.length; i++){
      var singledata = data[i];

        if (singledata.name.match(new RegExp(searchkey, "i")) || singledata.role.match(new RegExp(searchkey, "i"))){
            searchresult.push(singledata);
        }
      
    }
    return searchresult;
  };
});