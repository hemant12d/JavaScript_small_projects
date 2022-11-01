#include<stdio.h>
#include<conio.h>
int main()
{
    int a, num, rev = 0;
printf("Enter any no\n");
scanf("%d", &num);
while (num > 0)
{
a = num%10;
rev = rev * 10+a; // rev*10 is declared as zero to keep old value in rev
num = num/10;
}
printf("reverse is %d", rev);
return 0;
}