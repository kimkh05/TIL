#include<stdio.h>

int main(){
    int size;
    int a, b;
    scanf("%d", &size);
    for(int  i = 0;i<size;i++){
        scanf("%d %d", &a, &b);
        printf("Case #%d: %d + %d = %d\n", i+1,a, b, a+b);
    }
    return 0;
}