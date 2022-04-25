package testJava;

public class Cpu{ 
    String cpuName;

    public Cpu(){
        this("I9-9900k");
    }

    public Cpu(String cpuName){
        this.cpuName = cpuName;
    }
    
    public void printCpu(){
        System.out.println(this.cpuName);
    }
    
    public void printCpu(String cpuName){
        System.out.println(cpuName);
    }
}
