function sum(a, b){
    const result = a + b;
    return result;
}

function subs(a, b){
    const sumResult = sum(a,b);
    const result = sumResult - 3;
    console.log(result)
}

subs(4,2)