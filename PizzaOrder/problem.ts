import * as fs from 'fs';
import * as readline from 'readline';
import * as split from 'split';
import { exit } from 'process';
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
    const main = (arr: Array <number>, target: number) => {

        
        /**
         * pick one biggest number under target in array
         * by BinarySearch
         * 
         * @param arr of numbers
         * @param target number
         * @returns bigNum
         */
        const binarySearch = (arr, target) =>{
            const re_binarySearch = function(arr, target, s_index, e_index) :number{
                return 1;

            
            }

            return re_binarySearch(arr, target, 0, arr.length-1);

        }

        /**
         * pick one biggest number under target in array
         * 
         * @param arr of numbers
         * @param target number
         * @returns bigNum
         */
        const pickBigNum = function(arr: Array<number>, target: number) :number{
            if(arr[arr.length-1] <= target) return arr.length-1;

            const bigNum = binarySearch(arr, target);
            return bigNum;



        }


        let currentMax :number = 0;
        let wholeMmax : number = 0;

        let currentNum: number = arr[arr.length -1];


        
        
        let tmpTarget: number = pickBigNum(arr, target);
        if(tmpTarget > currentNum*2){
            let result = main(arr.slice(0,arr.length-1),tmpTarget);
            if(result){
                return "Something"
            }else{
                return "otherthing"
            }
        }else{
            // binarySearch
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