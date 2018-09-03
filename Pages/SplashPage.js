var Observable = require("FuseJS/Observable");
var Storage = require("FuseJS/Storage");

var SAVENAME = "localStorage.json";//this is thd file we are going to be saving to
var hasStored = Observable(false); //this is the boolean to know if it has been successfully stored
var message = Observable("");
var welcomeText = Observable("Loading...");

var username = Observable("");
var password = Observable("");

var usernameStore = Observable("");
var passwordStore = Observable("");

function goToHomePage(){
	router.push("home")
}

Storage.read(SAVENAME).then(function(content) {
    var data = JSON.parse(content);
    usernameStore.value = "Stored data: "  + data.username;
    passwordStore.value = "Stored data: "  + data.password;

}, function(error) {
    //For now, let's expect the error to be because of the file not being found.
    welcomeText.value = "There is currently no local data stored";
});

function saveUserDetails(){
	// var storeObject = {username: username.value, password: password.value};
	// Storage.write(SAVENAME, JSON.stringify(storeObject)).then(function(save_result){
	// 	degug_log("this is the save result", save_result);
	// 	message.value = save_result
	// });
	if(username.value !="" && password.value !=""){
		router.push("home");	
	}
	else{
		message.value = "Username or Password Field cannot be Empty"
	}
   
}

module.exports = {
	password: password,
	username: username,
	goToHomePage: goToHomePage,
	saveUserDetails: saveUserDetails,
	message: message
};