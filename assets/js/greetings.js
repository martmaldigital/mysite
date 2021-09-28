//function to display daily greetings
let day;
switch (new Date().getDay()) {
	case 0:
		day = "a Marvellous Sunday.";
		break;
	case 1:
		day = "a Beautiful Monday.";
		break;
	case 2:
		day = "an Excellent Tuesday.";
		break;
	case 3:
		day = "a Peaceful Wednesday.";
		break;
	case 4:
		day = "an Awesome Thursday.";
		break;
	case 5:
		day = "a Good Friday.";
		break;
	case 6:
		day = "an Amazing Saturday.";
}
document.getElementById("greet").innerHTML = "Welcome to " + day;
