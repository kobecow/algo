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

        vector<int> vec(l1 + l2, 0);

        for (unsigned int i = 0; i < l1; i++)
        {
            int carry = 0;
            int n1 = (int)(num1[l1 - i - 1] - '0');
            cout << "This is n1 : " << n1 << endl;
            for (unsigned int j = 0; j < l2; j++)
            {
                int n2 = (int)(num2[l2 - j - 1] - '0');
                cout << "This is n2: " << n2 << endl;
            }
        }
        return "aaa";
    }
};

int main()
{
    Solution sol;
    sol.multiply("13312312", "74167478215");
    return 0;
}