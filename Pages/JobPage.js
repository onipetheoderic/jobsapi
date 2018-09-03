function  formatNumber(val){
    return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

var job = this.Parameter;
	var company = job.map(function(x) { return x.company; });
	var picture = job.map(function(x) { return x.picture; });
	var description = job.map(function(x) { return x.description; });
	var title = job.map(function(x) { return x.title; });
	var salary = job.map(function(x) { return x.salary });
	var position = job.map(function(x) {return x.position;})
	var sex = job.map(function(x) {return x.sex;});
	var state = job.map(function(x) {return x.state;});
	var country = job.map(function(x) {return x.country;});
	var date_posted = job.map(function(x) {return x.date_posted;});
	var company_phone = job.map(function(x) {return x.company_phone;});
	var company_email = job.map(function(x) {return x.company_email;});
	var id = job.map(function(x) {return x.id;});

function goToHome(){
	router.goBack();
}
function startLoading() {
		isBusy.activate();
		setTimeout(function() {
			isBusy.deactivate();
		}, 4000);
};

	module.exports = { //Now we have a value in Js exposed to the UX
		 company: company,
		 picture: picture,
		 description: description,
		 title: title,
		 salary: salary,
		 position: position,
		 sex: sex,
		 state: state,
		 country: country,
		 date_posted: date_posted,
		 company_phone: company_phone,
		 company_email: company_email,
		 id: id,
		 goToHome: goToHome
		};

/* category_name	"Marketing"
date_posted	"Thu Mar 20 2008 23:37:27 GMT+0100 (W. Central Africa Standard Time)"
company_phone	"(804) 404-2381"
company_email	"schneiderashley@medalert.com"
description	"Sint ullamco anim commodo duis dolor laborum."
country	"Guadeloupe"
state	"Guam"
category_id	4
sex	"male"
company	"Medalert"
salary	155121
position	"Teacher"
title	"Schneider"
picture	"http://placehold.it/32x32"
id	1*/