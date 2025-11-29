const state = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Flash',
    },
    {
        id: 4,
        name: 'Green Lantern',
    }
]

const index = 1;
const newName = 'Wonder Woman';

// Forma anterior
// const newState = state.map((hero, i) => {
//     if (i === index) {
//         hero.name = newName;
//     }

//     return {...hero};
// })

const newState = state.with(index, {

    // El at es para acceder a un elemento en un array
    ...state.at(index),
    name: newName,
})

state[0].name = 'Changed Name';

console.table(newState);