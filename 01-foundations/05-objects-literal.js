let person = {
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




