package Algorithm.기본예제;

import java.util.Scanner;

public class index{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int w = sc.nextInt();
        int[][] arr = new int[h][w];
        int n = sc.nextInt();
        for(int i = 0 ; i < n; i++){
            int l = sc.nextInt();
            int d = sc.nextInt();
            int x = sc.nextInt();
            int y = sc.nextInt();
            if(l == 0){
                if(arr[x][y] == 0){
                    arr[x][y] = 1;
                } else{
                    if(d == 0){
                        for(int j = 0; j < n; j++){
                            arr[x][y + j] = 1;
                        }
                    } else {
                        for(int j = 0; j < n; j++){
                            arr[x + j][y] = 1;
                        }
                    }
                }
            }
        }
        for(int i = 0; i < h; i++){
            for(int j = 0; j < w; j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println("");
        }
    }
}