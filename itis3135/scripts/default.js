function displayInfo() {
    var userName = prompt("Enter your name: ");
    var userMood = prompt("How are you feeling today?");
    var date = new Date();
    var todayDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("info").innerHTML = ("Today is " + todayDate + ", and the time is " + time + ". The Sapphire Kangaroo Inc welcomes you, " + userName + "!" + " We're glad you are doing " + userMood + "!");
}

function travelTime() {
    var miles = prompt("Enter total number of miles: ");
    var driveMiles = prompt("Enter the estimated number of miles you will drive per hour: ");
    var time = (parseInt(miles) / parseInt(driveMiles));
    document.getElementById("travelTime").innerHTML = ("We've estimated that it will take " + parseInt(time) + " hours to reach you destination");
}

function travelSuggestions() {
    var choose = prompt("I want to go somewhere (Choose either 'warm' or 'cold'):  ");
    if(choose == 'warm') {
        document.getElementById("warmPlaces").innerHTML = ("Mexico, Florida, Cuba, Spain, Hawaii or Carlifornia");
    } else {
        document.getElementById("coldPlaces").innerHTML = ("Alaska, Iceland, Montana, Norway, Antarctica or Canada");
    }
}

function travelQuote() {
    document.getElementById("travelAdvice").innerHTML = ("It's good to have an end to a journey; but it is the journey that matters, in the end  - Ernest Hemingway");
}

function food() {
    document.getElementById("food").innerHTML = ("Here are some MUST TRY dishes: Fajitas, Pot roase, Key lime pie, sushi, Tom yum goong, Seafood paella, Som tam, Poutine");
}

function feedback() {
    var feedback = prompt("Tell us what we should improve or add to our site!");
    document.getElementById("feedback").innerHTML = ("Your feedback: " + feedback + " --> " + "thank you for your feedback, we really appreciate it!");
}

