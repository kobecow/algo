/**
 * Given two non-negative integers num1 and num2 represented as strings,
 *  return the product of num1 and num2, also represented as a string.
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
#include <string>
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    string multiply(string num1, string num2)
    {
        unsigned int l1 = num1.size(), l2 = num2.size();
        if (l1 == 0 || l2 == 0)
            return "0";

        vector<int> v(l1 + l2, 0);
        vector<int> vv;
        vector<int> con(11);
    }
};