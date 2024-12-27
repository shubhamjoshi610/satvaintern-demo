public class Main {
    public static void main(String[] args) {
        // 1. Class and Object Example
        System.out.println("Class and Object Example:");
        Car car1 = new Car("Toyota", 2021);
        car1.displayInfo();
        System.out.println();

        // 2. Abstraction Example
        System.out.println("Abstraction Example:");
        Shape shape = new Circle(); // Using abstract class
        shape.draw();
        System.out.println();

        // 3. Encapsulation Example
        System.out.println("Encapsulation Example:");
        Account account = new Account(1000.0);
        account.deposit(500.0);
        System.out.println("Balance: " + account.getBalance());
        System.out.println();

        // 4. Inheritance Example
        System.out.println("Inheritance Example:");
        Dog dog = new Dog();
        dog.eat(); // Inherited method
        dog.bark(); // Method in Dog class
        System.out.println();

        // 5. Polymorphism Example
        System.out.println("Polymorphism Example:");
        // Compile-time polymorphism
        MathOperations operations = new MathOperations();
        System.out.println("Add Integers: " + operations.add(5, 10));
        System.out.println("Add Doubles: " + operations.add(5.5, 10.5));

        // Runtime polymorphism
        Vehicle vehicle = new Car("porsche",1970); // Polymorphic reference
        vehicle.start(); // Calls overridden start() in Car
        System.out.println();

        // 6. Interface Example
        System.out.println("Interface Example:");
        AnimalBehavior cat = new Cat();
        cat.sound();
        System.out.println();

        // 7. Enum Example
        System.out.println("Enum Example:");
        Day today = Day.MONDAY;
        switch (today) {
            case MONDAY:
                System.out.println("Start of the week");
                break;
            case FRIDAY:
                System.out.println("Almost weekend!");
                break;
            default:
                System.out.println("Another day");
        }
    }
}
