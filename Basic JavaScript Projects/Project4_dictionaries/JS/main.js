function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black", 
        Breed:"Labrador", 
        Age: 5,
        Sound: "Bark!"
        
    };
    delete Animal.Sound; //removes Animal.Sound from "Dictionary"
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //retrieves Animal.Sound from "Dictionary"
}