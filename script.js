function talk(){
  var know = {
	"mess":"We offer high quality foods",
	"hostel":"Hostel facilities available for both boys and girls",
	"mode":"Online mode, ofline mode",
	"timings":"Working timings 9am to 3pm",
	"placement":"We produce 90% placement every year",
	"transport facility": "Available all over chennai",
	"courses" : "CSC,EEE ,MECH,ECE,IT",
	"admission": "Admission starts from August 21st,Book yous soon ;)",
	"new joining": "Welcome to our college.Have a visit to our college",
	"fees" :"Please log in through Students login to view fees details ",
	"hi" : "Hello,J.A.R.V.I.S Here.Looking forward help you :)",
    "Hi" : "Hello,J.A.R.V.I.S Here.Looking forward help you :)",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Subscribe.",
    "ok" : "Thank You So Much <3",
    "Bye" : "Okay! Will meet soon. TC:).."
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}
