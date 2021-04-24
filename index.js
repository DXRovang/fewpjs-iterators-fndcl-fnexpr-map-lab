const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let y = []
const titleCased = () => {
   // iterate over array
  tutorials.map(function(str){
  // turn each string into an array
   y = str.split(" ")
   // take the first letter of each word and capitalize
   y.map(function(word){
    word[0].charAt(0).toUpperCase() 
   })
  });
  return tutorials
}




