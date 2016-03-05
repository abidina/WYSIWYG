var people = [
  one = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  two = {
    title: "Princess",
    name: "Diana Frances",
    bio: "......",
    image: "http://images.closerweekly.com/uploads/posts/image/61392/princess-diana.jpg"
    lifespan: {
      birth: 1961,
      death: 1996
    }
  },  
  three = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },  
  four = {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
    lifespan: {
      birth: 1747,
      death: 1797
    }
  }
];

var personEl = document.getElementById("personContainer");



// Create a DOM element for each of the objects inside the container. Style your person elements however you like.

// For every even numbered element, have a light yellow background.

// For every odd numbered element, have a light blue background.

// Each element's DOM structure should be as shown below.

// When you click on one of the person elements, a dotted border should appear around it.

// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.

// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.