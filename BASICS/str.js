// some advacne js property

// slice/                 
// slice is non destructive orignal string remains unaltered and new string is changed//
// outof bound is handeled with closest valid index by js//

const greeting = 'hello, world'
const extracPor = greeting.slice(0,5) // indexing is 0 based  // and end index would be +1 we want to extract if we want hello < it actually lies bw 0 to 4 > but we hv to 0 to 5
console.log(extracPor) 

const extracPor1 = greeting.slice(0,90) // will give hello world
console.log(extracPor1)

const extracPor2 = greeting.slice(7) // would give world
console.log(extracPor2)

// using -ve indices:

const extracPor3 = greeting.slice(-5) // would give world
console.log(extracPor3);

// slicing bw -ve indices
const extracPor4 = greeting.slice(-8,-1);
console.log(extracPor4);

const extracPor5 = greeting.slice(-6,-1);  // -1 means will print till 2nd last element means ek index hmseha badha ke likhna hoga
console.log(extracPor5);

// split method: coneverts string to array

const str = 'hello world'
const strArr = str.split(' ') // split method take 1st argument which basically is a seprator that means on what basis aaray elements should be seprated like in aor case hello world has a space in bw so hello will be one elements of array and world would be another element
console.log(strArr)

const str8 = 'hello,world,deevyansh';
const strArr8 = str8.split(',');  // it will hv hello word  and deevyansh on each index of array
console.log(strArr8);

const str9 = 'hello,world,deevyansh';
const strArr9 = str9.split(',',1);  // adding 1 in split method will hv hello only
console.log(strArr9);

const complexText = "apple:banana;orange";

const complexTextArr = complexText.split(/[;:]/); // this how string with complex text can be splitted

console.log(complexTextArr);

const character = "aeiou";

const characterArr = character.split("");

console.log(characterArr);

// index of method : returns index of element in string and if not found returns -1
// its case sensitive search starts at f

const str10 = 'hello,world'

console.log(str10.indexOf('hello'));
                                        // returns the starting index
console.log(str10.indexOf('world'));

// using string.trim: remove white spaces from begning at end

const str11 = '  hello,world  '
console.log(str11.trim());      

const str12 = '  hello,world  ';
console.log(str12.trimStart()); // remove white spaces from start
console.log(str12.trimEnd()); // remove white spaces from end

const str13 = '  hello,     world  '; // can not remive spaces from in bw
console.log(str13.trim());

// removing escape characters using trim
const str14 = '\n hello,world \n' // this will remove all white spaces and escape characters
console.log(str14.trim());

// replace method
const str15 = 'hello,world'
console.log(str15.replace('hello','deevyansh')) // hello is replaced with deevynahsh

const repText = 'hello,world,world'
console.log(repText.replace('world','deevyansh')) // world is replaced with deevyansh but only world at 1 st index

const repText1 = 'hello,world,world'
console.log(repText1.replace(/world/g,'deevyansh')) // world is replaced with deevyansh on both t 1 st index and 2 nd

// last index of method
const str16 = 'hello,world,world'
console.log(str16.lastIndexOf('world'))  // provide 12 as last inde



        