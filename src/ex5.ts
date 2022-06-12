const studentGrade: Array<[string, number]> = 
    [['ana', 10], ['maria', 8], ['jose', 9], 
     ['marcio', 4]];
console.log(studentGrade.filter(d => d[1] >= 5))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.map(x => x + 1)
                   .map(x => x*x));
// cuidado: é gerada uma lista intermediaria desnecessaria

console.log(numbers.reduce((acc, x) => acc + x, 200));

const ss = ['maria', 'joana', 'vanessa'];
console.log(ss.reduce((acc, s) => acc + s.length, 0));
