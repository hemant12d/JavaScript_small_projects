#include <stdio.h>
#include <conio.h>
#include <stdbool.h>
int main()
{
    int a, b, temp = 0, entry_exit_value, num;
// a --> take the last value of number to convert into reverse
// b --> take value from num to palindrome comparison since the value of num is changing into nested loop
// temp --> to hold previous value
// entry_exit_value --> assign value into boolean
// num --> to take value for palindrome comparison
    bool value = true; // Declaration of boolean to give the control of loop to user
    while (value)
    {
        value = NULL;
        printf("Enter Any Number\n");
        scanf("%d", &num);
        b = num;
        while (num > 0)
        {
            a = num % 10;
            num = num / 10;
            temp = temp * 10 + a;
        }
        if (temp == b)
        {
            printf("Number is palindrome\n");
            temp = 0;
        }
        else
        {
            printf("Not palindrome\n");
            temp = 0;
        }
        printf("1 to continue\n");
        printf("2 or other number for exit\n");
        scanf("%d", &entry_exit_value);
        if (entry_exit_value == 1)
        {
            value = true;
        }
        else
        {
            value = false;
            printf("Program has ended\n");
        }
    }
    return 0;
}