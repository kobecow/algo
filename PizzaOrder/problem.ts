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
    /**
     * @param Array <number> arr // sorted ie. [1,3,7,12,20]
     * @param number target
     * @returns number typeNum
     * @returns Array <number> pizzas // sorted ie [1,2,3,6]
     */
    const main = (arr, target) => {
        let currentMax :number = 0;
        let wholeMmax : number = 0;

        const binarySearch = (arr, target) =>{
            
        }
    }

    const readInterface = readline.createInterface(readFileConfig);
    let linecount: number = 0;
    let typeNumPizzas: number;
    let targetNum: number;
    let pizzaArr: Array<number>;

    readInterface.on("line", function (data) {


        if (linecount === 0) {
            const arr = data.split(' ');
            typeNumPizzas = parseInt(arr[1]);
            targetNum = parseInt(arr[0]);

            console.log(typeNumPizzas);
            console.log(targetNum);
        }

        if(linecount === 1){
            pizzaArr = data.split(' ').map(x => parseInt(x));
            console.log(pizzaArr);
            return main(pizzaArr, targetNum);
        }



        console.log(linecount);
        linecount += 1;
    })

    return "ABCD";


}
solution("./input_files/a_example.in")