import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.Stack;

public class Main{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Queue<Integer> q = new LinkedList<>();
        Stack<Integer> s = new Stack<>();
        int cnt = 0;
        int n = in.nextInt();
        int l = 1;
        String[] str = new String[n];
        for(int i = 0 ; i < n; i++){
            int temp = in.nextInt();
            q.add(temp); // add
        }
        for(int i = 0; i < q.size(); i++){
            if(s.size() == q.peek() && s.peek() == q.peek()){
                s.pop();
                q.remove();
                str[cnt++] = "+";
            } else if(l <= q.peek()){
                while(l <= q.peek()){
                    s.push(l++);
                    str[cnt++] = "+";
                }
            } else {
                System.out.println("NO");
                break;
            }
        }
        for(int i = 0; i < str.length; i++){
            System.out.println(str[i]);
        }
    }
}