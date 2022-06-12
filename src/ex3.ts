type Pair<A, B> = [A, B];

function first<A, B>(pair: Pair<A, B>): A {
    return pair[0];
}

function second<A, B>(pair: Pair<A, B>): B {
    return pair[1];
}

function createPair<A, B>(a: A, b: B): Pair<A, B> {
    return [a, b];
}


const pair = createPair(10, 'maria');
console.log(second(pair))
const other = createPair('maria', 10);
console.log(second(other));
