package testJava;

public class Person {
    String name;
    public Person(){
        this("홍길동");
    }

    public Person(String name){
        this.name = name;
    }

    public void use(){
        System.out.println(this.name + "는 컴퓨터를 사용하고 있습니다.");
    }
    
    public void eat(){
        System.out.println( this.name+"이 음식을 먹고 있습니다.");
    }
}