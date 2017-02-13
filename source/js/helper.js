
// Slideshow
// var slideIndex = 1;
// var slideNum = 2;
// showSlides(slideIndex);

// function addSlide(n){
//   $("#slide").append("<span class=".dot" onclick="currentSlide(n)"></span>");
// }

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }


var projects = {"projects" : [{"name" : "Personal Website",
					"date" : "Feb 2017",
					"description" : ""},
					{"name" : "SJSU Book Finder",
					"date" : "April 2016",
					"description" : "An iOS application that allow SJSU stidents to buy, sell, and trade textbook. \
					The app was build on Java server to communicate between the iOS and the Database. \
					We implemented our own database base the knowledge we gained from Data Structure and Algorithms course. \
					The database store the user and the textbooks infomation. We used AVL Tree and map as our main data structure."},
					{"name" : "Mancala Game",
					"date" : "May 2016",
					"description" : "Using Java Swing to apply the concept of Object-Oriented programing to develop GUI Mnacala game.\
					Different design patterns were use to develop the application. MVC was use to help organize the code.\
					Stategies patterns were used to manage different board layouts."},
					{"name" : "Mancala Game",
					"date" : "May 2016",
					"description" : "Using Java Swing to apply the concept of Object-Oriented programing to develop GUI Mnacala game.\
					Different design patterns were use to develop the application. MVC was use to help organize the code.\
					Stategies patterns were used to manage different board layouts."}
	
	]}

var newProject = '<div class="mySlides fade"><div class="w3-row-padding w3-center">';
var projectTitle = '<h1>%data%</h1>';
var projectDates = '<div class="date-text">%data%</div>';
var projectDescription = '<p><br>%data%</p>';
var projectImage = '<img src="%data%">';

for(proj in projects.projects){
		$("#project").append(newProject);
		$("#project").append(projectTitle.replace("%data%", projects.projects[proj].name));
		$("#project").append(projectDates.replace("%data%", projects.projects[proj].date));
		$("#project").append(projectDescription.replace("%data%", projects.projects[proj].description));
		addSlide();
	}

var work = { "experiences" :[
			{"position" : "Peer Educator",
			"employer" : "SISU Peer Connections",
			"start_date" : "January 2016",
			"end_date" : "Present",
			"location" : "San Jose, CA",
			"description" : "- Tutor students in math and computer science courses <br>\
			- Assist professor in an Introduction Programming course(CS46A) <br>\
			- Facilitate and plan study session for students in CS46A"},
	 		{"position" : "Shift Manager",
	 		"employer" : "Pho T&T",
	 		"start_date" : "May 2015",
	 		"end_date" : "January 2016",
	 		"location" : "San Leandro, CA",
	 		"description" : "- Train new employees <br>\
	 		- Build costumer satisfication <br>\
	 		- Manage sales"} ]
	 };

var education = {"school" : "San Jose State University",
			"start_date" : "August 2014",
			"major" : "Computer Science",
			"location" : "San Jose, CA"
	};	

