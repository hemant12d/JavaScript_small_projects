#include <stdio.h>
int main()
{
    int i, j;
    int a[3][3];
    printf("Enter the values of matrix:-\n");
    for (i = 0; i <= 2; i++)
    {
        for (j = 0; j <= 2; j++)
        {
            printf("Enter value for i[%d] j[%d]\n", i, j);
            scanf("%d", &a[i][j]);
        }
         
    }

    for (i = 0; i <= 2; i++)
    {
        for (j = 0; j <= 2; j++)
        {
            printf("%d ", a[i][j]);
         
        }
       printf("\n");
    }

    return 0;
}