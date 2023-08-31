import chalk from "chalk";


// export function add(){}
export const add = (numero1,numero2) => {
    return numero1 + numero2;
}


export const showResult = (numero1,numero2) => {
    
    const result = add (numero1,numero2);
    if (result>=5){
    return chalk.green(result)}
    else {
    return chalk.red(result)}
}

console.log(showResult(5,4));
