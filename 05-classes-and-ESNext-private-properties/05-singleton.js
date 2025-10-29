class Singleton {
    static instance;
    name = '';

    constructor( name = '') {
        if ( !!Singleton.instance ) {
            return Singleton.instance;
        }

        Singleton.instance = this
        this.name = name
    }
}

const instanceOne = new Singleton('First Instance');
const instanceTwo = new Singleton('Second Instance');
const instanceThree = new Singleton('Third Instance');

console.log(`Name instanceOne: ${instanceOne.name}`);
console.log(`Name instanceTwo: ${instanceTwo.name}`);
console.log(`Name instanceThree: ${instanceThree.name}`);