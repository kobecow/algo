
import * as fs from 'fs';
const fsPromises = fs.promises;




async function readfile(filepath: string): Promise<Buffer> {
    try {
        return fsPromises.readFile(filepath);
    } catch (err) {
        console.error('Error occured while reading directory!', err);
    }
}

readfile("/Users/nishiseiji/work/algo/PizzaOrder/input_files/a_example.in").then(function (data) {
    console.log(data)
}, function (err) {
    console.log(err)
})