function Food() {
    var food = ["Achar Gosht", "Chicken Khari", "Qurma", "Nehari", "BBQ", "Shami kabab", "Mali Boti", "Achari Bhindi", "Arvi-Bangan", " Haleem", "Rice", "Bariyani", "Veg-Rice"];
    document.getElementById("myfav-food").innerHTML = food;
}

function Father() {
    var aboutmyfather = {
        firstName: "Athar-",
        secondName: "Sohail",
        work: "Teacher",
        age: "54",
        city: "Bahawalpur",
        country: "Pakistan",
    };
    document.getElementById("results").innerHTML = aboutmyfather.firstName + aboutmyfather.secondName + " is " + aboutmyfather.age + " years old. ";
}

function Pets() {
    var pets = [
        "Cow", "Goat", "Bull", "Sheep", "Hen", "Horse", "Cat", "Dog"
    ];
    document.getElementById("demo").innerHTML = pets[0];
    document.getElementById("pet").innerHTML = pets[2];
    document.getElementById("pets").innerHTML = pets[5];
    document.getElementById("om").innerHTML = pets[7];
    document.getElementById("am").innerHTML = pets[6];
}