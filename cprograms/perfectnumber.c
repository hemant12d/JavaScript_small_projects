#include<stdio.h>
int main()
{
    int n, i=1, sum=0;
    printf("enter a no.");
    scanf("%d, &n");
    while (i<n)
    {
        if (n%i==0)
        {
            sum - sum + i;
        }
        i++;
    }
    if (sum == n)
    {
        printf("Perfect");
    }
    
        return 0;
}
