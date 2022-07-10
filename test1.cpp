#include<stdio.h>

int main(){
  EXEC SQL BEGIN DECLARE SECTION;
       Char p_no[4], p_name[21];
       int price;
  EXEC SQL END DECLARE SECTION;
  printf("제품번호를 입력하세요. : ");
  scanf("%s", p_no);
  EXEC SQL SELECT 제품명, 단가, INTO :p_name, :price
       FROM 제품
       WHERE 제품번호= :p_no;
  printf("\n제품명 = %s", p_name);
  printf("\n단가 = %d", price);
  return 0;
}