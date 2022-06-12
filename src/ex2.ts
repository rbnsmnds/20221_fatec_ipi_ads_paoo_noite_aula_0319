type notEmpty<A> = [A, List<A>];
type List<A> = notEmpty<A> | undefined;

function head<A>(list: notEmpty<A>): A {
    return list[0];
}

function tail<A>(list: notEmpty<A>): List<A> {
    return list[1];
}

function isEmpty<A>(list: List<A>): boolean {
    return list == undefined;
}

function build<A>(head: A, tail: List<A>): notEmpty<A> {
    return [head, tail];
}

// recebe begin <= end
// devolve uma list com os numeros begin, begin+1, ..., end-1
function createList(begin: number, end: number): List<number> {
    return begin == end
           ? undefined
           : build(begin, createList(begin+1, end));
}

function toStr<A>(list: List<A>): string {
    return list == undefined 
           ? 'undefined'
           : `[${head(list)}, ${toStr(tail(list))}]`
}


function map<A, B>(list: List<A>, f: (a: A) => B): List<B> {
    return list == undefined
           ? undefined
           : build(f(head(list)), map(tail(list), f));
}

const strs = build('maria', build('joana', build('amanda', undefined)))
const comps = map(strs, s => s.length);
console.log(comps);

const list = createList(2, 6);
const otherList = createList(10, 20);
const listOfLists = build(list, build(otherList, undefined));
console.log(head(listOfLists));
console.log(toStr(list))

const names = build('maria', build('joana', undefined));
console.log(toStr(names));
