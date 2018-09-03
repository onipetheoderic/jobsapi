var Observable = require("FuseJS/Observable");
var job_Link = "http://api.jsonbin.io/b/5b8b061ed6fe677c48d46499";
var category_Link = "http://api.jsonbin.io/b/5b8ba6cb3ffac56f4bd8d410/1";
var latest_jobs = Observable();
var errorMessage = Observable("");

var category = Observable();

var cat_item = [];


fetch(job_Link)
.then(function(result){
    if(result.status !== 200) {
        errorMessage.value = "Oh no something went wrong: ", result.status;
        return;
        }
    result.json()//convert it to JSon
    .then(function(data){
        debug_log("successful");
        for(var i=0; i < data.length; i++){
            var item = data[i];
            latest_jobs.add(item);
        }
       
        debug_log("successful added to th latest_jobs");   
	
    })
}).catch(function(error){
    errorMessage.value = "Oh no Error incured";
});

fetch(category_Link)
.then(function(result){
    if(result.status !== 200) {
        errorMessage.value = "Oh no something went wrong: ", result.status;
        return;
        }
    result.json()//convert it to JSon
    .then(function(data){
        debug_log("successful");
        for(var i=0; i < data.length; i++){
            var item = data[i];
            category.add(item);
        }
       
        debug_log("successful added to category");   
	
    })
}).catch(function(error){
    errorMessage.value = "Oh no Error incured";
});


function gotoJob(arg){
    var job = arg.data;//data would actually be the hike we are afte
    router.push("job", job);
    // The push function will navigate to the given route
}

// var category = Observable(
// 		{ name: "hackers", color:"Red" },
// 		{ name: "Bombers", color:"Red"  },
// 		{ name: "Defenders", color:"Red"  },
// 		{ name: "hackers", color:"Red" },
// 		{ name: "Bombers", color:"Red"  },
// 		{ name: "Defenders", color:"Red"  },
// 		{ name: "hackers", color:"Red" },
// 		{ name: "Bombers", color:"Red"  },
// 		{ name: "Defenders", color:"Red"  }
// 		);

var name = Observable("");
// brown, green, purple, darkbrown, yellow
var colors = ["#935116","#145A32","#AF601A","#7E5109","#9A7d0A"];

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

// function getColor(){	
// 	return colors[Math.floor(Math.random() * colors.length)];
// }
var getColor = randomNoRepeats(colors);

module.exports = {
	category: category,
	name: name,
	latest_jobs: latest_jobs,
	getColor: Observable(getColor),
    gotoJob: gotoJob
}


