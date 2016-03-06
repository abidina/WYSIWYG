var inputEl = document.getElementById("bioEdit");
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

var specBio = document.getElementById("personCard").firstChild;

// adds dotted border to container regardless of where you click inside the container -- adds dotted border
personEl.addEventListener("click", function(e) {
  event.target.closest("article").classList.add("clicked");
});

// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
personEl.addEventListener("click", function(e) {
  inputEl.focus();
});

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
inputEl.addEventListener("keyup", function(e) {
  specBio.innerHTML = event.target.value;
}
  );


// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 13){
    inputEl.value = "";
  }
});