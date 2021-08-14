// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



function findMatching(array, desiredName) {
    return array.filter(function(driver) {
        if (driver.toUpperCase() === desiredName.toUpperCase()) { return true; }

    });

    
}  

//- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. 
// The function should be case insensitive.

function fuzzyMatch(array, letters) {
    let count = -1;
    return array.filter(function(drivers){
        for(let i=0; i < letters.length;i++) {
            if (letters[i] !== drivers[i]) { return false; }
        }
        return true;
    });
    




}
// - This function takes an array of drivers' names and a string as arguments for querying the array,
// and returns all drivers whose names begin with the provided letters.

function matchName(array, str){
    return array.filter(function(names){
        if (names.name === str) { return true; }


    });

}

//- This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name
// and hometown. The function should return each element whose name property matches the provided string argument.

console.log(fuzzyMatch(drivers, 'Sa'));

