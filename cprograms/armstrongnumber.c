#include<stdio.h>
#include<conio.h>
int main()
{
int a, b, num, arm = 0;
printf("Enter any Number\n");
scanf("%d", &num);
b = num;
while (num > 0)
{
    a = num % 10;
    num = num / 10;
    arm = arm + a*a*a;
}
if (arm == b)
{
    printf("Armstrong");
}
else{
    printf("Not Armstrong");
}
return 0;
}


// Armstrong number --> 153, 370, 371, 407