/*
	Get the right team:
	---------------------------------------
	You are a technical founder of the best new technology and 
	design company. You need to hire some new team members to
	deal with all the contracts you have been getting.

	You have decided your management team has spent too much
	time dealing with interviewing your applicatants just to
	find out they haven't even taken a BrainStation course and
	therefore don't have the skills needed for the job.

	In order to help out your team, you decided to write an
	awesome JavaScript program that will take in an array
	of applicants and an array of positions. The program will
	then use two functions to find the best applicants for
	your team:

		1. rankApplicants(applicants, positions)
			- Give a person two more attributes. One being 
			  their developer rank and another being their
			  designer rank. For each skill that matches
			  increase their points accordingly.
		2. matchApplicants(applicants)
			- Give each person a new attibute which says either
			  designer or developer to match them to a team.

	NOTE: It may be helpful to write a 3rd function to handle
	the printing of your new ranking program. If you are using
	Sublime Text to write your code, remeber to use debug() 
	instead of console.log() to print your values.
*/

//	Write your code here between the lines:
//	--------------------------------------- 

//  ---------------------------------------


// 	Provided Code:
// 	---------------------------------------

// 	Returns an array of person objects.
function getApplicants() {
	var person1 = {
		"name" : "Bill Riley",
		"DOB" : "August 4, 1991",
		"address" : "123 Street Road",
		"skills" : ["HTML", "CSS", "Illustrator", "Published"] 
	};

	var person2 = {
		"name" : "Jess Jillenger",
		"DOB" : "June 21, 1988",
		"address" : "456 Fake Road",
		"skills" : ["HTML", "PhotoShop", "CSS", "Ruby on Rails"]
	};

	var person3 = {
		"name" : "Rebecca Simmons",
		"DOB" : "December 1, 1994",
		"address" : "1324 West Street",
		"skills" : ["HTML", "PhotoShop", "CSS", "JavaScript", "Angular"]
	};

	var person4 = {
		"name" : "Jim Matthews",
		"DOB" : "January 14, 1990",
		"address" : "1324 East Street",
		"skills" : ["HTML", "PhotoShop", "CSS", "Cognitive Psychology", "Published", "UI/UX"]
	};

	var person5 = {
		"name" : "Samantha Monico",
		"DOB" : "February 7, 1990",
		"address" : "1992 Johnson Street",
		"skills" : ["HTML", "CSS", "Cognitive Psychology", "UI/UX", "PhotoShop"]
	};

	var person6 = {
		"name" : "Cindy Liu",
		"DOB" : "May 7, 1979",
		"address" : "18 Marr Road",
		"skills" : ["HTML", "CSS", "Published", "Angular", "JavaScript", "Node"]
	};

	return [person1, person2, person3, person4, person5, person6];
};

//	Returns an array of position objects.
function getPositions() {
	var designTeam = {
		"teamName" : "Creative Team",
		"requiredSkills" : ["PhotoShop", "UI/UX", "Illustrator", "Cognitive Psychology", "Published"]
	};

	var devTeam = {
		"teamName" : "Dev Team",
		"requiredSkills" : ["HTML", "CSS", "JavaScript", "Angular", "Ruby on Rails", "Node"]
	};

	return [designTeam, devTeam];
};