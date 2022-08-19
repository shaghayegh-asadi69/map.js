const people = [
 {
    name: 'shan',
    age: 20,
    position: 'developer',
 },
 {
    name: 'farzad',
    age:22,
    position: 'Dentist',
 },
 {
    name: 'brian',
    age: 36,
    
 }

];
const getAges = (person) => person.age * 2;
const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 30,
    };
});
console.log(newPeople); 

const names = people.map((person)=> `<h2>${person.name}</h2>`)
const result = document.querySelector('#result'); 
result.innerHTML = names.join('');