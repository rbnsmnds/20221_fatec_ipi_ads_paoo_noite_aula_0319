type Empty = undefined;
type notEmpty<A> = [A, List<A>];
type List<A> = notEmpty<A> | Empty;

function head<A>(list: notEmpty<A>): A {
    return list[0];
}

function tail<A>(list: notEmpty<A>): List<A> {
    return list[1];
}

function isEmpty<A>(list: List<A>): list is Empty {
    return list == undefined;
}

function empty(): Empty { return undefined; }

function build<A>(head: A, tail: List<A>): notEmpty<A> {
    return [head, tail];
}

// recebe begin <= end
// devolve uma list com os numeros begin, begin+1, ..., end-1
function createList(begin: number, end: number): List<number> {
    return begin == end
           ? empty()
           : build(begin, createList(begin+1, end));
}

function toStr<A>(list: List<A>): string {
    return isEmpty(list) 
           ? 'empty'
           : `[${head(list)}, ${toStr(tail(list))}]`
}


function map<A, B>(list: List<A>, f: (a: A) => B): List<B> {
    return isEmpty(list)
           ? empty()
           : build(f(head(list)), map(tail(list), f));
}

function filter<A>(list: List<A>,
    test: (a: A) => boolean): List<A> {
        if (isEmpty(list)) return empty();
        const resto = filter(tail(list), test);
        if (test(head(list)))
            return build(head(list), resto);
        return resto;
}

function reduce<A, B>(list: List<A>,
    op: (acc: B, a: A) => B,
    initial: B): B {
        return isEmpty(list)
            ? initial
            : reduce(tail(list), op, op(initial, head(list)));
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

const nums = build(2, build(4, build(3, empty())));
console.log(toStr(filter(nums, x => x > 2)));
console.log(reduce(nums, (acc, x) => acc + x, 0));
