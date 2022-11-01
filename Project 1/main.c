#include <stdio.h>
int main()
{
  int l = 5;
    for(int i = 1; i!=6; i++){
      for (int k = 1; k<=l; k++)
      {
        printf(" ");
      }
              for (int j = 1; j <= i; j++)
        {
          printf("* ");
        }
        printf("\n");
        l--;
    }
    return 0;
}
// Thanks Vs Code:):)