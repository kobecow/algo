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
#include <iostream>

using namespace std;

int main()
{
    /*
    three test
    both x and b is huge number <-- Done
    either x or b is huge one <-- Done
    neither one is huge <-- Done

    ToDo
    answer is including prefix 0 like 00256. because of small input like 32 * 8.
    handle it.
    */
    int x = 32; // 0 < x <=2147483647
    int y = 8;  // 0 < x <=2147483647
    // max_handable = 10000 < 46340
    int max_handable = 10000;

    int x_gt, x_lt;

    if (x >= max_handable)
    {
        x_gt = x / max_handable;
        //cout << x_gt << endl;

        x_lt = x - (x_gt * max_handable);
        //cout << x_lt << endl;
    }
    else
    {
        x_gt = 0;
        //cout << x_gt << endl;

        x_lt = x;
        //cout << x_lt << endl;
    }

    int y_gt, y_lt;

    if (y >= max_handable)
    {

        y_gt = y / max_handable;
        //cout << y_gt << endl;

        y_lt = y - (y_gt * max_handable);
        //cout << y_lt << endl;
    }
    else
    {
        y_gt = 0;
        //cout << y_gt << endl;

        y_lt = y;
        //cout << y_lt << endl;
    }

    // left
    int big_xy = x_gt * y_gt;

    // middle
    int mid_xy = (x_gt * y_lt) + (x_lt * y_gt);

    // right
    int small_xy = x_lt * y_lt;

    // string-like calculation
    int small_gt = small_xy / max_handable;
    int small_lt = small_xy - (small_gt * max_handable);

    int mid_sum = mid_xy + small_gt;
    int mid_gt = mid_sum / max_handable;
    int mid_lt = mid_sum - (mid_gt * max_handable);

    int big_sum = big_xy + mid_gt;

    // cout << big_sum;
    // cout << mid_lt;
    // cout << small_lt<<endl;
    string ans = to_string(big_sum) + to_string(mid_lt) + to_string(small_lt);

    cout << ans;

    return 0;
}