function me() {
    let hour = new Date().getHours();
    let greeting;

    if (hour < 9) {
        greeting = "Good Morning Mam"
    }
    else if (hour < 15) {
        greeting = "Good Noon"
    }
    else if (hour < 23) {
        greeting = "Good Evening"
    }
    document.getElementById("hour").innerHTML = "Current hour is " + hour;
    document.getElementById("greet").innerHTML = greeting;
}