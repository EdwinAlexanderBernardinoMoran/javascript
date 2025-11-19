/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitOptimizeComponent = async (element) => {
    console.time('Start')

    // const value = await slowPromise();
    // const valueTwo = await mediumPromise();
    // const valueThree = await fastPromise();

    const [valueOne, valueTwo, valueThree] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])

    element.innerHTML = `${ valueOne } / ${ valueTwo } / ${ valueThree }`;

    console.timeEnd('Start')
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => resolve('Slow Promise'), 2000)
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => resolve('Medium Promise'), 1500)
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => resolve('Fast Promise'), 1000)
})