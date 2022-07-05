#include<iostream>

using namespace std;

int factorial(int n){
  return n == 0 ? 1 : n * factorial(n-1);
}

int main(){
  int n, k, min=0, max=0;
  cin >> n >> k;
  int *arr = new int[n];
  for(int i =0 ; i < n; i++){
    cin >> arr[i];
    arr[i] > k ? max++ : min++;
  }
  int cnt = factorial(min)*factorial(max);
  
 cout << cnt << endl;
  return 0;
}
