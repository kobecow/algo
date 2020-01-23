const fs = require('fs');
console.log(process.cwd())
fs.readFile('/Users/nishiseiji/work/algo/PizzaOrder/input_files/a_example.in', (err, data) => {
    if (err) throw err;
    console.log(data);


});
