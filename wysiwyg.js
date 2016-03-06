var people = [
  one = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  two = {
    title: "Princess",
    name: "Diana Frances",
    bio: "......",
    image: "http://images.closerweekly.com/uploads/posts/image/61392/princess-diana.jpg",
    lifespan: {
      birth: 1961,
      death: 1996
    }
  },  
  three = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },  
  four = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  }
];

var personEl = document.getElementById("personContainer");

for (var i = 0; i < people.length; i++) {
  personEl.innerHTML += "<article class= " + '"' + "people" + '"' + ">" + "<header>" + people[i].name + ", " + people[i].title + "</header>" + "<section " + " id= " + '"' + "personCard" + '"' + ">" + "<p>" + people[i].bio + "</p>" + "<p>" + "<img src=" + '"' + people[i].image + '">' + "</section>" + "<footer>" + people[i].lifespan.birth + " - "  + people[i].lifespan.death + "</footer>" + "</article>";
};

var inputEl = document.getElementById("bioEdit");
var specBio = document.getElementById("personCard").firstChild;

// adds dotted border to container regardless of where you click inside the container -- adds dotted border
personEl.addEventListener("click", function(e) {
  e.target.closest("article").classList.add("clicked");
});

// focus on input whenever a person element is clicked
personEl.addEventListener("click", function(e) {
  inputEl.focus();
});

// when user begins typing in the input box, bio is mirrored to input (but only works first element so far, regardless of which is clicked)
inputEl.addEventListener("keyup", function(e) {
  specBio.innerHTML = e.target.value;
}
  );


// clear input field on enter key press
document.addEventListener("keyup", function(e) {
  if(e.keyCode == 13){
    inputEl.value = "";
  }
});