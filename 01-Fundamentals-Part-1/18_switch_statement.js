// Switch statement

const day = 'monday';

switch(day) {
    case "monday": // day === "monday"
        console.log("Plan my course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "sunday":
    case "saturday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

// Replace the code above with an if/else statement

if (day === "monday") {
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
} else if(day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === 'sunday' || day === 'saturday') {
    console.log("Enjoy the weekend :D");
} else {
    console.log(`${day} is not a valid day!`);
}
