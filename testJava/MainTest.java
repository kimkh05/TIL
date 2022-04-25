package testJava;

public class MainTest{
    public static void main(String[] args) {
        Guest guest = new Guest();
        Cpu cpu = new Cpu();
        guest.use();
        guest.eat();

        guest.print();
        guest.print(100);

        cpu.printCpu("I9-9900k");
        cpu.printCpu();
    }
}