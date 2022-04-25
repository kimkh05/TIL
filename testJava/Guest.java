package testJava;

public class Guest extends Person {
    private int time;
    
    public Guest(){
        this(10);
    }

    public Guest(int time){
        super("철수와 영희");
        this.time = time;
    }

    public void print(){
        System.out.println("안녕하세요");
    }
    
    public void print(int time){
        System.out.println(time + "분");
    }

    @Override
    public void use(){
        System.out.println("마우스와 키보드를 " + this.time + "분동안 사용하고 있습니다.");
    }
}
