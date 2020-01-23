import * as fs from 'fs';
import * as readline from 'readline';
import * as split from 'split';
const fsPromises = fs.promises;

class Answer {
    num_Type: string;
    pizzas: Array<string>;

    getAnswer(): string {
        return this.num_Type + '\n' + this.pizzas.join(',');
    }
}


async function solution(filepath: string) {

    const readFileConfig = {
        input: fs.createReadStream(filepath),
        console: false
    }

    const readInterface = readline.createInterface(readFileConfig);
    let linecount: number = 0;
    let typeNumPizzas: number;
    let targetNum: number;

    readInterface.on("line", function (data) {


        if (linecount === 0) {
            const arr = data.split(' ');
            typeNumPizzas = parseInt(arr[1]);
            targetNum = parseInt(arr[0]);

            console.log(typeNumPizzas);
            console.log(targetNum);
        }



        console.log(linecount);
        linecount += 1;
    })

    return "ABC";


}
solution("./PizzaOrder/input_files/a_example.in")