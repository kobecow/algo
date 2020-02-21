"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var readline = require("readline");
var fsPromises = fs.promises;
var Answer = /** @class */ (function () {
    function Answer() {
    }
    Answer.prototype.getAnswer = function () {
        return this.num_Type + '\n' + this.pizzas.join(',');
    };
    return Answer;
}());
function solution(filepath) {
    return __awaiter(this, void 0, void 0, function () {
        var readFileConfig, main, readInterface, linecount, typeNumPizzas, targetNum, pizzaArr;
        return __generator(this, function (_a) {
            readFileConfig = {
                input: fs.createReadStream(filepath),
                console: false
            };
            main = function (arr, target) {
                /**
                 * pick one biggest number under target in array
                 * by BinarySearch
                 *
                 * @param arr of numbers
                 * @param target number
                 * @returns bigNum
                 */
                var binarySearch = function (arr, target) {
                    var re_binarySearch = function (arr, target, s_index, e_index) {
                        return 1;
                    };
                    return re_binarySearch(arr, target, 0, arr.length - 1);
                };
                /**
                 * pick one biggest number under target in array
                 *
                 * @param arr of numbers
                 * @param target number
                 * @returns bigNum
                 */
                var pickBigNum = function (arr, target) {
                    if (arr[arr.length - 1] <= target)
                        return arr.length - 1;
                    var bigNum = binarySearch(arr, target);
                    return bigNum;
                };
                var currentMax = 0;
                var wholeMmax = 0;
                var currentNum = arr[arr.length - 1];
                var tmpTarget = pickBigNum(arr, target);
                if (tmpTarget > currentNum * 2) {
                    var result = main(arr.slice(0, arr.length - 1), tmpTarget);
                    if (result) {
                        return "Something";
                    }
                    else {
                        return "otherthing";
                    }
                }
                else {
                    // binarySearch
                }
            };
            readInterface = readline.createInterface(readFileConfig);
            linecount = 0;
            readInterface.on("line", function (data) {
                if (linecount === 0) {
                    var arr = data.split(' ');
                    typeNumPizzas = parseInt(arr[1]);
                    targetNum = parseInt(arr[0]);
                    console.log(typeNumPizzas);
                    console.log(targetNum);
                }
                if (linecount === 1) {
                    pizzaArr = data.split(' ').map(function (x) { return parseInt(x); });
                    console.log(pizzaArr);
                    return main(pizzaArr, targetNum);
                }
                console.log(linecount);
                linecount += 1;
            });
            return [2 /*return*/, "ABCD"];
        });
    });
}
solution("./input_files/a_example.in");
