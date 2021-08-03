const num1 = document.getElementById('num1') as HTMLInputElement,
    num2 = document.getElementById('num2') as HTMLInputElement,
    btn = document.querySelector('button')!,
    p = document.getElementById('paragraph');
type NumOrString = number | string;
type Result = { val: number, timestamp: Date};
interface ResultObj {
    val: number,
    timestamp: Date
}
const numResults: number[] = [];
const stringResults: string[] = [];
function add(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printObj(resultObj: Result) {
    console.log(resultObj.val)
}

btn.addEventListener('click', () => {
    const val1 = num1.value,
        val2 = num2.value;
    const result = add(+val1, +val2);
    const stringResult = add(val1, val2);
    numResults.push(result as number)
    stringResults.push(stringResult as string)
    printObj({val: result as number, timestamp: new Date()})
    console.log(numResults, stringResults);
});