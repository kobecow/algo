/*
Given two strings which represent non-negative integers,
multiply the two numbers and return the product as a string as well.
You should assume that the numbers may be sufficiently large such that the built-in integer type will not be able to store the input
(Python does have BigNum, but assume it does not exist).
*/

/**
 * @param {integer} input1 
 * @param {integer} input2
 * @return {string} ans (input1 * input2)
 * 
 * info : integer must be less than equal 2,147,483,647
 * 1. define max_handable
 * 2. separate over max_handable and less than handable
 * 3. ???
 * 
 * 
*/

#include <string>

using namespace std;

int main()
{
    /*
    three test
    both x and b is huge number
    either x or b is huge one
    neither one is huge
    */
    float x = 333;      // 0 < x <=2147483647
    float y = 57138764; // 0 < x <=2147483647
    return 0;
}