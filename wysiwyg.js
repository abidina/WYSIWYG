var people = [
  one = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Tomoe was one of Minamoto Yoshinaka's finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  two = {
    title: "Princess of Wales",
    name: "Diana Frances",
    bio: "Diana, Princess of Wales, was the first wife of Charles, Prince of Wales, who is the eldest child and heir apparent of Queen Elizabeth II.",
    image: "http://images.closerweekly.com/uploads/posts/image/61392/princess-diana.jpg",
    lifespan: {
      birth: 1961,
      death: 1996
    }
  },  
  three = {
    title: "CIA Agent",
    name: "Sydney Bristow",
    bio: "Sydney is a highly skilled and well-established agent for the United States government.",
    image: "http://ia.media-imdb.com/images/M/MV5BMTk5NTk5NDA5OV5BMl5BanBnXkFtZTYwMzA2ODEz._V1_SX640_SY720_.jpg",
    lifespan: {
      birth: 1975,
      death: "Present"
    }
  },  
  four = {
    title: "Great Pyrenees",
    name: "Sansa",
    bio: "The Pyrenean Mountain Dog, known as the Great Pyrenees in North America, is a large breed of dog used as a livestock guardian dog.",
    image: "http://sitmeanssit.com/dog-training-mu/austin-dog-training/files/2011/07/photo.jpg",
    lifespan: {
      birth: 2015,
      death: "Present"
    }
  }
];

var personEl = document.getElementById("personContainer");

for (var i = 0; i < people.length; i++) {
  personEl.innerHTML += '<article class="people"><header>' + people[i].name + ', ' + people[i].title + '</header><section><p>' + people[i].bio + '</p><p><img src=' + people[i].image + '></section><footer>' + people[i].lifespan.birth + ' - '  + people[i].lifespan.death + '</footer></article>';
};

var inputEl = document.getElementById("bioEdit");
var pplContainer = document.getElementsByTagName("article");
var clickedEl = document.getElementsByClassName("clicked");

// adds dotted border to container regardless of where you click inside the container -- adds dotted border
personEl.addEventListener("click", function(e) {
  for (var i = 0; i < pplContainer.length; i++) {
    pplContainer[i].classList.remove("clicked");
  }
  e.target.closest("article").classList.add("clicked");
});

// focus on input whenever a person element is clicked, also clears previous input value
personEl.addEventListener("click", function(e) {
  inputEl.value = "";
  inputEl.focus();
});

// when user begins typing in the input box, bio is mirrored to input
inputEl.addEventListener("keyup", function(e) {
  var clicked = clickedEl[0].children[1].children[0];
  clicked.innerHTML = e.target.value;
});

// clear input field on enter key press
document.addEventListener("keyup", function(e) {
  if(e.keyCode == 13){
    inputEl.value = "";
  }
});