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
         * @returns i index // or -1 
         */
        const binarySearch = (arr, target) =>{
            const re_binarySearch = function(arr, target, s_index, e_index) :number{
                if(s_index === e_index) return -1;
                
                const m_index = Math.floor((s_index + e_index) /2);
                if(arr[m_index] === target) return m_index;
                else if(arr[m_index-1] < target && arr[m_index]){}


            
            }

            return re_binarySearch(arr, target, 0, arr.length-1);

        }

        /**
         * pick one biggest number under target in array
         * 
         * @param arr of numbers
         * @param target number
         * @returns index or -1 
         */
        const pickBigNum = function(arr: Array<number>, target: number) :number{
            if(arr[arr.length-1] > target) return arr.length-1;
            if(arr[0] < target) return -1;

            const bigNum = binarySearch(arr, target);
            return bigNum;



        }


        let currentMax :number = 0;
        let currentMaxArr: Array <number> = [];
        let wholeMmax : number = 0;
        let wholeMmaxArr: Array <number> = [];
        let isCompleted: boolean = false;

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


/*
Get Biggest one
again again.
try small one with last index.
*/





/*
Pizzas:[2,7,17,23,59,83,142] :240 <= target
Pizzas:[1,1,1,1,10,10,10,40] :43
Target:240
Target:160

40 --> 1 --> 1 --> 1


142 --> 17 :159
142 --> 7 --> 2: 151
83 --> 59 --> 17 --> :159

142 --> 83 --> 7 -->2 :234 leftOver:6
142 --> 59 --> 23 --> 7 --> 2 :233 < 240 leftOver:7
 X 142 --> 59 --> 17 -->  7 --> 2 : < 233 leftOver:7
142 --> 23 --> 17 -->  7 --> 2 << 240

83 --> 59 --> 23 --> 17 --> 7 --> 2 :191
 X 59 --> 23 --> 17 --> 7 --> 2: << 191
leftover: 7
indexies[6,]
is_completed:

MaxNumber: 234
maxIndexies: [6,5,1,0]



Pizzas:[7,17,23,59,83,101,310,311,,,,,,,,,,,,920,1000] : 1312
1000 --> 311 X leftOver:1 <-- 

[0, 100]1000 --> [0, 99]310 --> [0,6]
1000 --> 101 --> 83 --> 59 --> 23 --> 17 --> 7 :1290 = leftOver: 22
920 --> 

s_index :0
e_index :100
m_index:50 --> 101 > 100



 
 */