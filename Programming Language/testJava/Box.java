package testJava;

public class Box<T>{
    public T t;
    public Box(T t){
        this.t = t;
    }
    public T getObject(){
        return t;
    }
    public void setObject(T t){
        this.t = t;
    }
}