const person = {
    name: "Tony Stark",
    codeName: "Ironman",
    live: true,
    age: 45,
    coords: {
        lat: 34.034, lng: -118.70
    },
    suits: ["Mark I", "Mark V", "Hulkbuster"],
    address: {
        zip: "10880, 90265",
        location: "Malibu, California"
    },
    'last-movie': "Infinity War"
}

console.log(person);
console.log('Name:', person.name);
console.log('Name', person['name']);
console.log('Age:', person.age);
console.log('Coords:', person.coords);
console.log('Lat:', person.coords.lat);

console.log('No. of suits', person.suits.length);
console.log('Last suit:', person.suits[person.suits.length - 1]);

const x = 'live';
console.log('Live:', person[x]);
console.log('Last movie:', person['last-movie']);

delete person.age;
console.log(person);


person.married = true;

const entriesPares = Object.entries( person );
console.log( entriesPares );

// person = true

Object.freeze( person );
person.money = 1000000000;
person.address.location = "New York";
console.log(person);

const propertiesObjects = Object.getOwnPropertyNames( person );
const valuesProperties = Object.values( person );

console.log( propertiesObjects );
console.log( valuesProperties );
