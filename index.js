

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  // Iterate through each tutorial in tutorials array
  return tutorials.map(title => {
    // Split each title into individual words
    let words = title.split(' ');
    // Capitalize the first letter of each word
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the capitalized words back into a string
    return capitalizedWords.join(' ');
  });
}
console.log(titleCased());
